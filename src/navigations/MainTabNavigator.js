import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuctionStack from './AuctionStack';
import MyCarStack from './MyCarStack';
import SettingStack from './SettingStack';

import { Ionicons } from "@expo/vector-icons";

// 1. defaultTabBarOption 만들기
const defaultTabBarOption = {
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
  inactiveBackgroundColor: 'white',
  activeBackgroundColor: 'white',

}
const Tab = createBottomTabNavigator();


export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MyCarStack" tabBarOptions={defaultTabBarOption}>
      <Tab.Screen
        name="MyCarStack"
        component={MyCarStack}
        options={{
          title: 'My Car',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'ios-car'} focused={focused} color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="AuctionStack"
        component={AuctionStack}
        options={{
          title: '경매',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'ios-cash'} focused={focused} color={color} size={size} />
          )
        }} />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          title: 'Setting',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={'ios-settings'} focused={focused} color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

