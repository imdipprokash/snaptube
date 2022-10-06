import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {dataSource} from './data/dataSourc';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const dataGet = async () => {
    const subscriber = await firestore().collection('Users').doc('ABC').get();

    console.log(subscriber._data);
  };
  useEffect(() => {
    dataGet();
    // const subscriber = firestore()
    //   .collection('Users')
    //   .doc('ABC')

    //   .onSnapshot(documentSnapshot => {
    //     console.log(documentSnapshot);
    //     // console.log('User data: ', documentSnapshot?.docs[0]?._data.photos[0]);
    //     // console.log('User data1: ', documentSnapshot?.docs[1]?._data.photos[0]);
    //   });

    // return () => subscriber();
  }, []);
  return (
    <View className="h-screen bg-white">
      <FlatList
        data={dataSource}
        renderItem={({item}: any) => (
          <TouchableOpacity
            key={item.id}
            className="p-4 m-6 bg-gray-300 mb-2 rounded-md">
            <Text key={item.id} className="text-black">
              {item.title}
            </Text>

            <Text className="text-black text-center">{item.des}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default App;
