import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AddNewDoc from './pages/AddNewDoc';
import ChatPage from './pages/ChatPage';

type Props = {};

const Routes = (props: Props) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen
          name="Chat"
          component={ChatPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AuthPage"
          component={AuthPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addNew"
          component={AddNewDoc}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
