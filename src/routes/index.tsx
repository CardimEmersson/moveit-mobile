import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {user.id ? (
          <Screen name="Home" component={Home} />
        ) : (
          <Screen name="Login" component={Login} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export { Routes };
