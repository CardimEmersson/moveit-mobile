import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

interface ProgressFillProps {
  percentage: number;
}

export const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExperienceInitial = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ProgressBar = styled.View`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray_line};
  margin: 0 12px;
  position: relative;
`;

export const ProgressFill = styled.View<ProgressFillProps>`
  width: ${({ percentage }) => percentage}%;
  height: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.green};
`;

export const CurrentExperience = styled.Text<ProgressFillProps>`
  position: absolute;
  top: 12px;
  left: ${({ percentage }) => percentage}%;

  color: ${({ theme }) => theme.colors.text};

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;

  /* transform: translateX(-50%); */
`;

export const ExperienceToNextLevel = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
