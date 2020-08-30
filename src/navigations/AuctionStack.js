import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultScreen from '../screens/DefaultScreen'

const Stack = createStackNavigator();
const defaultScreeOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
};
function AuctionStack({ navigation, ...props }) {
  return (
    <Stack.Navigator initialRouteName="AuctionHome" {...props} screenOptions={defaultScreeOptions}>
      <Stack.Screen name="AuctionHome" component={DefaultScreen} options={{ title: '경매 목록' }} />
      <Stack.Screen
        name="AuctionDetail"
        component={DefaultScreen}
        options={{
          title: '경매',
          headerTitle: () => (<Text > {navigation.getParam('carName').concat(" 경매") || '경매 상세보기'}</Text>),
        }} />
    </Stack.Navigator>
  );
}

export default AuctionStack;