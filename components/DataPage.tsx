import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
export interface _firebaseDataInterFace {
  id: string;
  title: any;
}
var dataArray: any = [];
var user: number;

type Props = {};

const DataPage = (props: Props) => {
  const [firebasedata, setFirebasedata] = useState<_firebaseDataInterFace>();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const _getFireStoreDoc = () => {
    dataArray = [];
    firestore()
      .collection('Users')
      .orderBy('name', 'asc')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          const data = {
            id: documentSnapshot.id,
            title: documentSnapshot.data().name,
          };
          dataArray.push(data);

          setFirebasedata(data);
        });
      });
    setIsRefreshing(false);
  };

  const removeHandler = (id: any) => {
    firestore()
      .collection('Users')
      .doc(id)
      .delete()
      .then(() => {
        setIsRefreshing(true);
        _getFireStoreDoc();
        Alert.alert('User deleted!');
      });
  };
  useFocusEffect(
    React.useCallback(() => {
      _getFireStoreDoc();
    }, []),
  );
  return (
    <View>
      {dataArray && (
        <FlatList
          refreshing={isRefreshing}
          onRefresh={() => _getFireStoreDoc()}
          data={dataArray}
          renderItem={({item}: any) => (
            <TouchableOpacity
              onPress={() => removeHandler(item.id)}
              key={item.id}
              className="p-4 m-6 bg-gray-300 mb-2 rounded-md">
              <Text key={item.id} className="text-black">
                {item.title}
              </Text>
              <Text className="text-black text-center">{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </View>
  );
};

export default DataPage;

const styles = StyleSheet.create({});
