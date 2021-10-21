import React from "react";
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

      <CountdownContainer></CountdownContainer>

      <ChallengeContainer></ChallengeContainer>
    </Container>
  );
}

export { Home };
