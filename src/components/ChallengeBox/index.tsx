import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LevelUpSvg from "../../assets/icons/level-up.svg";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import { ChallengeActive } from "../ChallengeActive";
import { ModalLevelUp } from "../ModalLevelUp";
import {
  Container,
  ChallengeNotActive,
  Title,
  ContentWrapper,
  Subtitle,
  ChallengeCard,
} from "./styles";

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      <ChallengeCard>
        {activeChallenge ? (
          <ChallengeActive
            activeChallenge={activeChallenge}
            handleChallengeFailed={handleChallengeFailed}
            handleChallengeSucceeded={handleChallengeSucceeded}
          />
        ) : (
          <ChallengeNotActive>
            <Title>{"Finalize um ciclo \n para receber um desafio"}</Title>
            <ContentWrapper>
              <LevelUpSvg width={RFValue(40)} />
              <Subtitle>Avance de level completando desafios</Subtitle>
            </ContentWrapper>
          </ChallengeNotActive>
        )}
      </ChallengeCard>
    </Container>
  );
}

export { ChallengeBox };
