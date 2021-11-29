import React, { useState } from "react";
import { StatusBar, Alert, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import LogoSvg from "../../assets/icons/logo.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  LogoBackground,
  LoginWrapper,
  WelcomeText,
  GoogleLogin,
  GoogleLogo,
  LoginText,
} from "./styles";

interface UseNavigationProps {
  navigate: (screen: string) => void;
}

function Login() {
  const [isLoadding, setIsLoadding] = useState(false);
  const { signInWithGoogle } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation<UseNavigationProps>();

  async function handleSignInWithGoogle() {
    setIsLoadding(true);

    try {
      await signInWithGoogle();
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta google");
    }

    setIsLoadding(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoBackground
        source={require("../../assets/icons/logo-background.png")}
      />

      <LogoSvg />

      <LoginWrapper>
        <WelcomeText>Bem-Vindo</WelcomeText>
        <LoginText>Faça login com o Google para começar</LoginText>

        <GoogleLogin onPress={handleSignInWithGoogle}>
          <GoogleLogo source={require("../../assets/icons/google-logo.png")} />
          <LoginText>Logar com o Google</LoginText>
        </GoogleLogin>
      </LoginWrapper>
      {isLoadding && (
        <ActivityIndicator style={{ marginTop: 18 }} color={theme.colors.red} />
      )}
    </Container>
  );
}

export { Login };
