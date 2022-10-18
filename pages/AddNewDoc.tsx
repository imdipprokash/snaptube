import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

interface Props {
    onClickHanlder?: () => void;
}
const AddNewDoc = (props: Props) => {
  const [name, setName] = React.useState<string>('');
  const addDoc = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
      })
      .then(() => {
        // props.onClickHanlder();

        Alert.alert(`User added! ${name}`);
        setName('');
      });
  };

  return (
    <View className="top-2 mx-auto space-y-2 items-center">
      <TextInput
        className=" bg-slate-500 h-10 w-72 rounded-md text-blue-100 text-base "
        onChange={e => setName(e.nativeEvent.text)}
        value={name}
        placeholder="Enter you name"
      />
      <Pressable
        className="px-2 py-1 bg-gray-500 rounded-md w-24"
        onPress={() => {
          addDoc();
        }}>
        <Text className="text-blue-300 text-lg">Add New </Text>
      </Pressable>
    </View>
  );
};

export default AddNewDoc;
