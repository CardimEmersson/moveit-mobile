import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export { Routes };
