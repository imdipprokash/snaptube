import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthUser} from '../Redux/slice';
type Props = {};

const AuthPage = (props: Props) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  //firebase

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const _loginHandler = () => {
    console.log('Login', userName, password);
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        dispatch(setAuthUser(userName));
        console.log('Signed in!', userName);
        nav.navigate('Home' as never);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const _signUpHanlder = () => {
    auth()
      .createUserWithEmailAndPassword(userName, password)
      .then(() => {
        console.log('User account created & signed in!');
        dispatch(setAuthUser(userName));
        nav.navigate('Home' as never);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <SafeAreaView className="bg-slate-300 h-screen space-y-4">
      <Text style={styles.text} className="mx-auto pt-2 pb-4">
        AuthPage
      </Text>

      <TextInput
        // autoComplete="email"
        placeholder="User Name"
        className="bg-slate-400 px-2 mx-4 rounded-lg text-slate-300 text-lg"
        onChange={e => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <TextInput
        placeholder="Password"
        // passwordRules={''}
        autoCorrect={false}
        secureTextEntry={true}
        keyboardType="default"
        className="bg-slate-400 px-2 mx-4 rounded-lg text-slate-300 text-lg"
        onChange={e => setPassword(e.nativeEvent.text)}
        value={password}
      />
      <View className="flex flex-row space-x-8 mx-auto py-4 ">
        <Pressable
          onPress={() => _loginHandler()}
          disabled={!!userName ? false : true || !!password ? false : true}>
          <Text
            style={styles.text}
            className="bg-green-700 py-2 px-2 w-20 rounded-md text-center">
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => _signUpHanlder()}
          disabled={!!userName ? false : true || !!password ? false : true}>
          <Text className="bg-slate-300 border-green-700 border-[1px] text-lg text-gray-600 py-2 px-2 w-32 rounded-md text-center">
            Sign Up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default AuthPage;
const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20,
  },
});
