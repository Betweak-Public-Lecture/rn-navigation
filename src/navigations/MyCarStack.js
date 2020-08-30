import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen'

const Stack = createStackNavigator();

function MyCarStack() {
  return (
    <Stack.Navigator initialRouteName="MyCarList">
      <Stack.Screen name="MyCarList" component={DefaultScreen} />
      <Stack.Screen name="MyCarDetail" component={DefaultScreen} />
    </Stack.Navigator>
  );
}

export default MyCarStack;

