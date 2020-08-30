import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen'

const Stack = createStackNavigator();

const defaultScreeOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
  title: "환경설정"
};

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="SettingHome" screenOptions={defaultScreeOptions}>
      <Stack.Screen name="SettingHome" component={DefaultScreen} />
      <Stack.Screen name="SettingEdit" component={DefaultScreen} />
    </Stack.Navigator>
  );
}

export default SettingStack;