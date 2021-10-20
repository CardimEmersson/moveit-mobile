import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export { Routes };
