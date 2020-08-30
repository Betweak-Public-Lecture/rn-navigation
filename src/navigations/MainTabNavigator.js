import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuctionStack from './AuctionStack';
import MyCarStack from './MyCarStack';
import SettingStack from './SettingStack';


const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MyCarStack">
      <Tab.Screen name="MyCarStack" component={MyCarStack} />
      <Tab.Screen name="AuctionStack" component={AuctionStack} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
}



