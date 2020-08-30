import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import DefaultScreen from '../screens/DefaultScreen';

const Stack = createStackNavigator();


/*** 1. CONFIG(PLATFORM등) 설정 ***/
const defaultScreeOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  },
};

function HeaderRight({ navigation }) {
  return (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      onPress={() => {
        navigation.navigate("RegisterCar");
      }}
    >
      <Ionicons name="ios-add" size={40} color="#ffffff" />
    </TouchableOpacity>
  )
}


function MyCarStack({ navigation, ...rest }) {
  return (
    <Stack.Navigator initialRouteName="MyCarList" mode={'modal'}
      screenOptions={{
        ...defaultScreeOptions,
        headerRight: () => (<HeaderRight navigation={navigation} />),
      }} >

      <Stack.Screen
        name="MyCarList"
        component={DefaultScreen}
        options={{
          title: '차 리스트',
        }} />
      <Stack.Screen
        name="MyCarDetail"
        component={DefaultScreen}
        options={{
          // 동적으로 헤더를 지정
          headerTitle: () => (<Text > {navigation.getParam('carName') || '차 상세보기'}</Text>),
          headerLeft: () => (
            <HeaderBackButton
              {...rest}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }} />

      <Stack.Screen name="RegisterCar" component={DefaultScreen} options={{ title: '차량 등록' }} />
    </Stack.Navigator>
  );
}

export default MyCarStack;

