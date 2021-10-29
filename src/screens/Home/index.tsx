import React from "react";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompleteChallenges } from "../../components/CompleteChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { ModalLevelUp } from "../../components/ModalLevelUp";
import { Profile } from "../../components/Profile";
import { CountdownProvider } from "../../contexts/CountdownContext";
import {
  Container,
  Main,
  MainScroll,
  CountdownContainer,
  ChallengeContainer,
} from "./styles";

function Home() {
  return (
    <Container>
      <Profile />
      <ExperienceBar />
      <CompleteChallenges />

      <CountdownProvider>
        <Main>
          <MainScroll showsVerticalScrollIndicator={false}>
            <ChallengeContainer>
              <ChallengeBox />
            </ChallengeContainer>

            <CountdownContainer>
              <Countdown />
            </CountdownContainer>
          </MainScroll>
        </Main>
      </CountdownProvider>
      <ModalLevelUp />
    </Container>
  );
}

export { Home };
