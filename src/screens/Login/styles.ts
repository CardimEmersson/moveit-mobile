import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  height: 200px;
`;

export const LogoBackground = styled.Image`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 300px;
`;

export const LoginWrapper = styled.View`
  align-items: center;
  margin-top: 50px;
`;

export const WelcomeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const GoogleLogin = styled(RectButton)`
  background-color: #4953b8;
  border-radius: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;

export const GoogleLogo = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 30px;
`;

export const LoginText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
`;
