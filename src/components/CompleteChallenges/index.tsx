import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { Container, Title, CountChallenges } from "./styles";

function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <Title>Desafios completos</Title>
      <CountChallenges>{challengesCompleted}</CountChallenges>
    </Container>
  );
}

export { CompleteChallenges };
