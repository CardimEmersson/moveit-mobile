import React, { useContext, useState, useEffect } from "react";
import CheckCircleSvg from "../../assets/icons/check_circle.svg";
import CloseSvg from "../../assets/icons/close.svg";
import PlaySvg from "../../assets/icons/play_arrow.svg";
import { CountdownContext } from "../../contexts/CountdownContext";
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
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Container>
      <CountdownWrapper>
        <MinutesWrapper>
          <MinuteLeft>{minuteLeft}</MinuteLeft>
          <MinuteRight>{minuteRight}</MinuteRight>
        </MinutesWrapper>
        <Separator>:</Separator>
        <SecondsWrapper>
          <SecondLeft>{secondLeft}</SecondLeft>
          <SecondRight>{secondRight}</SecondRight>
        </SecondsWrapper>
      </CountdownWrapper>

      {hasFinished ? (
        <ClosedCycleWrapper>
          <ClosedCycleButton>
            <TextClosedCycle>Ciclo encerrado</TextClosedCycle>
            <CheckCircleSvg />
          </ClosedCycleButton>
        </ClosedCycleWrapper>
      ) : (
        <>
          {isActive ? (
            <AbandonCycleWrapper>
              <AbandonCycleButton onPress={resetCountdown}>
                <TextAbandonCycle>Abandonar ciclo</TextAbandonCycle>
                <CloseSvg />
              </AbandonCycleButton>
            </AbandonCycleWrapper>
          ) : (
            <StartCountWrapper>
              <StartCountButton onPress={startCountdown}>
                <TextStartCount>Iniciar um ciclo</TextStartCount>
                <PlaySvg />
              </StartCountButton>
            </StartCountWrapper>
          )}
        </>
      )}
    </Container>
  );
}

export { Countdown };
