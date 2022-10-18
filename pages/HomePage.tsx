// import { NavigationContainer } from '@react-navigation/native';
import {Text, View, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import DataPage from '../components/DataPage';
import {useSelector} from 'react-redux';
import authUser from '../Redux/slice';
import {Reducer} from '../Redux/store';
type Props = {};

const HomePage = () => {
  const [initializing, setInitializing] = useState(true);
  const userEmail = useSelector((state: Reducer) => state.authUser);
  const nav = useNavigation();
  const _logOutHnalder = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'));
  };

  return (
    <View className="h-screen bg-white">
      <Text className="text-xl py-2  text-black text-center font-light">
        Your email is:{userEmail.authUser}
      </Text>

      <View className=" felx flex-row">
        {/* Add new name here */}
        <Pressable
          onPress={() => nav.navigate('addNew' as never)}
          className="mx-auto bg-slate-400 px-2 py-1 rounded-md mt-2">
          <Text className="text-black text-lg">Add New</Text>
        </Pressable>
        {/* Log out hanlder */}
        <Pressable
          onPress={() => {
            _logOutHnalder();
            nav.navigate('AuthPage' as never);
          }}
          className="mx-auto bg-slate-400 px-2 py-1 rounded-md mt-2">
          <Text className="text-black text-lg">Log Out</Text>
        </Pressable>
      </View>
      {/* This is for getting data from fire based */}
      <DataPage />
    </View>
  );
};

export default HomePage;
