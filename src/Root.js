import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './navigations/MainTabNavigator';
import AuthStack from './navigations/AuthStack';

const isLoggedIn = true;
// const isLoggedIn = false;

export default function Root() {
  return (
    <React.Fragment>
      {
        isLoggedIn ? (
          <MainTabNavigator />
        ) : (
            <AuthStack />
          )}
    </React.Fragment>
  )
}

