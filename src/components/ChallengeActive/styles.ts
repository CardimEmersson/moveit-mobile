import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const WinExperience = styled.Text`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.primary_600};

  font-size: ${RFValue(20)}px;
  margin: 0 20px 20px;
  padding: 20px 0;

  text-align: center;

  border-bottom-color: ${({ theme }) => theme.colors.gray_line};
  border-bottom-width: 1px;
  border-style: solid;
`;

export const ChallengeContent = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 24px 20px;
`;

export const ChallengeImage = styled.Image``;

export const TextNewChallenge = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
  margin: 24px 0;
`;

export const ChallengeDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`;

export const ChallengeFooter = styled.View`
  flex-direction: row;
  overflow: hidden;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const ChallengeFailedButton = styled(RectButton)`
  flex: 1;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.red};
  opacity: 0.9;
`;

export const TextChallengeFailed = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;

export const ChallengeSucceededButton = styled(RectButton)`
  height: 48px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.green};

  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;

export const TextChallengeSucceeded = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;
