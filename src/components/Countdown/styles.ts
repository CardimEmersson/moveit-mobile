import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  margin: 0 20px;
`;

export const CountdownWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export const MinutesWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: rgba(0, 0, 0, 0.05);
  shadow-offset: 5px 5px;
  shadow-opacity: 0.8;
  elevation: 1;

  border-radius: 5px;
`;

export const MinuteLeft = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(120)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.title};

  border-right-color: #f0f1f3;
  border-right-width: 1px;
  border-style: solid;
`;

export const MinuteRight = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(120)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.title};

  border-left-color: #f0f1f3;
  border-left-width: 1px;
  border-style: solid;
`;

export const Separator = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(104)}px;
  margin: 0 8px;
`;

export const SecondsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.white};
  shadow-color: rgba(0, 0, 0, 0.05);
  shadow-offset: 10px 10px;
  shadow-opacity: 0.8;
  elevation: 1;

  border-radius: 5px;
`;

export const SecondLeft = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(120)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.title};

  border-right-color: #f0f1f3;
  border-right-width: 1px;
  border-style: solid;
`;

export const SecondRight = styled.Text`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(120)}px;
  text-align: center;

  color: ${({ theme }) => theme.colors.title};

  border-left-color: #f0f1f3;
  border-left-width: 1px;
  border-style: solid;
`;

export const ClosedCycleWrapper = styled.View`
  margin-top: 20px;
  height: 80px;
  border-radius: 5px;

  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.green};
  border-style: solid;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ClosedCycleButton = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextClosedCycle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;

  margin-right: 10px;
`;

export const AbandonCycleWrapper = styled.View`
  margin-top: 20px;
  height: 80px;
  border-radius: 5px;

  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }) => theme.colors.green};
  border-style: solid;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const AbandonCycleButton = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextAbandonCycle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;
`;

export const StartCountWrapper = styled.View`
  margin-top: 20px;
  height: 80px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.blue};
`;

export const StartCountButton = styled(RectButton)`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextStartCount = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-weight: bold;

  margin-right: 5px;
`;
