import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen'

const Stack = createStackNavigator();

function AuctionStack(props) {
  return (
    <Stack.Navigator initialRouteName="AuctionHome" {...props}>
      <Stack.Screen name="AuctionHome" component={DefaultScreen} />
      <Stack.Screen name="AuctionList" component={DefaultScreen} />
      <Stack.Screen name="AuctionDetail" component={DefaultScreen} />
    </Stack.Navigator>
  );
}

export default AuctionStack;