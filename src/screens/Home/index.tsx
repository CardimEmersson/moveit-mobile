import React from "react";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompleteChallenges } from "../../components/CompleteChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import {
  Container,
  Main,
  CountdownContainer,
  ChallengeContainer,
} from "./styles";

function Home() {
  return (
    <Container>
      <Profile />
      <ExperienceBar />
      <CompleteChallenges />

      <Main showsVerticalScrollIndicator={false}>
        <ChallengeContainer>
          <ChallengeBox />
        </ChallengeContainer>

        <CountdownContainer>
          <Countdown />
        </CountdownContainer>
      </Main>
    </Container>
  );
}

export { Home };
