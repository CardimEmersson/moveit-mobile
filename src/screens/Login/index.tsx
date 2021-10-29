import React from "react";
import { StatusBar } from "react-native";
import LogoSvg from "../../assets/icons/logo.svg";
import {
  Container,
  LogoBackground,
  LoginWrapper,
  WelcomeText,
  GoogleLogin,
  GoogleLogo,
  LoginText,
} from "./styles";

function Login() {
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

        <GoogleLogin>
          <GoogleLogo source={require("../../assets/icons/google-logo.png")} />
          <LoginText>Logar com o Google</LoginText>
        </GoogleLogin>
      </LoginWrapper>
    </Container>
  );
}

export { Login };
