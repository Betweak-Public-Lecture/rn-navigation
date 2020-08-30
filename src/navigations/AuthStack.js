import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen'
// import { createSwitchNavigator } from 'react-navigation';

const Stack = createStackNavigator();

const defaultScreeOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  title: "로그인/회원가입"
};

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={defaultScreeOptions}>
      <Stack.Screen name="Login" component={DefaultScreen} />
      <Stack.Screen name="Register" component={DefaultScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;