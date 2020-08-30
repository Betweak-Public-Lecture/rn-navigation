// 반드시 최상단에 위치시켜주세요.
import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import Root from './src/Root'


export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}

