import React from "react";
import { ThemeProvider } from "styled-components";
import { ChallengesProvider } from "./src/contexts/ChallengesContext";

import theme from "./src/styles/theme";

import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { Routes } from "./src/routes";

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <Routes />
      </ChallengesProvider>
    </ThemeProvider>
  );
}
