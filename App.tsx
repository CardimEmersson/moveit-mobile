import React from "react";
import { ThemeProvider } from "styled-components";
import { ChallengesProvider } from "./src/contexts/ChallengesContext";

import theme from "./src/styles/theme";

import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ChallengesProvider>
          <Routes />
        </ChallengesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
