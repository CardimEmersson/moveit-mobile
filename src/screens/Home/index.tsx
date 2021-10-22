import React from "react";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompleteChallenges } from "../../components/CompleteChallenges";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { Container, CountdownContainer, ChallengeContainer } from "./styles";

function Home() {
  return (
    <Container>
      <Profile />
      <ExperienceBar />
      <CompleteChallenges />

      <ChallengeContainer>
        <ChallengeBox />
      </ChallengeContainer>

      <CountdownContainer></CountdownContainer>
    </Container>
  );
}

export { Home };
