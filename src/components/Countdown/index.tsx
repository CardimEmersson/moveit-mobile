import React from "react";
import CheckCircleSvg from "../../assets/icons/check_circle.svg";
import CloseSvg from "../../assets/icons/close.svg";
import PlaySvg from "../../assets/icons/play_arrow.svg";
import {
  Container,
  CountdownWrapper,
  MinutesWrapper,
  MinuteLeft,
  MinuteRight,
  Separator,
  SecondsWrapper,
  SecondLeft,
  SecondRight,
  ClosedCycleWrapper,
  ClosedCycleButton,
  TextClosedCycle,
  AbandonCycleWrapper,
  AbandonCycleButton,
  TextAbandonCycle,
  StartCountWrapper,
  StartCountButton,
  TextStartCount,
} from "./styles";

function Countdown() {
  return (
    <Container>
      <CountdownWrapper>
        <MinutesWrapper>
          <MinuteLeft>1</MinuteLeft>
          <MinuteRight>0</MinuteRight>
        </MinutesWrapper>
        <Separator>:</Separator>
        <SecondsWrapper>
          <SecondLeft>3</SecondLeft>
          <SecondRight>0</SecondRight>
        </SecondsWrapper>
      </CountdownWrapper>

      <ClosedCycleWrapper>
        <ClosedCycleButton>
          <TextClosedCycle>Ciclo encerrado</TextClosedCycle>
          <CheckCircleSvg />
        </ClosedCycleButton>
      </ClosedCycleWrapper>

      <AbandonCycleWrapper>
        <AbandonCycleButton>
          <TextAbandonCycle>Abandonar ciclo</TextAbandonCycle>
          <CloseSvg />
        </AbandonCycleButton>
      </AbandonCycleWrapper>

      <StartCountWrapper>
        <StartCountButton>
          <TextStartCount>Iniciar um ciclo</TextStartCount>
          <PlaySvg />
        </StartCountButton>
      </StartCountWrapper>
    </Container>
  );
}

export { Countdown };
