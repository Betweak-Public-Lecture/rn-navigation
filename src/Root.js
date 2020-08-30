import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './navigations/MainTabNavigator';
import AuthStack from './navigations/AuthStack';


const Stack = createStackNavigator();

const isLoggedIn = true;

export default function Root() {
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainTabNavigator} />
      ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
    </Stack.Navigator>
  )
}


// import React from "react";

// import { View, StyleSheet } from "react-native";
// // import IconPractice from "./practices/IconPractice";
// // import LoginScreen from "./screens/LoginScreen";
// import SampleHomeScreen from "./screens/SampleHomeScreen";
// import SampleDetailScreen from "./screens/SampleDetailScreen";

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import DefaultScreen from "./src/screens/DefaultScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import CarListScreen from "./src/screens/CarListScreen";

// const AppContainer = createAppContainer(AppNaviagator);
// export default class Root extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <LoginScreen /> */}
//         {/* <SampleHomeScreen /> */}
//         <AppContainer />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
