import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 20px;
`;

export const ChallengeCard = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  elevation: 5;

  align-items: center;
  justify-content: center;
`;

export const ChallengeNotActive = styled.View`
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const ContentWrapper = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const Subtitle = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;
