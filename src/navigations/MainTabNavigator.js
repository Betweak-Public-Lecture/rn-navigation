import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuctionStack from './AuctionStack';
import MyCarStack from './MyCarStack';
import SettingStack from './SettingStack';


const MainTab = createBottomTabNavigator();

export default function App() {
  return (
    <MainTab.Navigator initialRouteName="MyCarStack">
      <MainTab.Screen name="MyCarStack" component={MyCarStack} />
      <MainTab.Screen name="AuctionStack" component={AuctionStack} />
      <MainTab.Screen name="SettingStack" component={SettingStack} />
    </MainTab.Navigator>
  );
}