import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
  flex: 1;
`;

export const MainScroll = styled.ScrollView`
  padding-bottom: 20px;
`;

export const ChallengeContainer = styled.View``;

export const CountdownContainer = styled.View``;
