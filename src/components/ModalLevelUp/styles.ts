import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(242, 243, 245, 0.8);
`;

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.white};

  padding: 24px 32px;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;

  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const NewLevelWrapper = styled.View`
  position: relative;

  align-items: center;
  justify-content: center;
`;

export const NewLevel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(120)}px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const Congratulations = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const SocialMediaButtons = styled.View``;

export const ShareTwitterButton = styled(RectButton)``;

export const TextTwitter = styled.Text``;
