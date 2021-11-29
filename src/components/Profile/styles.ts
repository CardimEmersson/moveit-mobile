import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 40px 20px 0 20px;
`;

export const ImageProfile = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;
`;

export const DataProfileWrapper = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;

export const LevelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const LevelNumber = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const LogoutButton = styled(RectButton)`
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.red};

  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;

export const TextLogout = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;
