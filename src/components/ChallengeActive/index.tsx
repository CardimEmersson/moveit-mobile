import React from "react";
import BodySvg from "../../assets/icons/body.svg";
import EyeSvg from "../../assets/icons/eye.svg";
import { Challenge, typeChallenge } from "../../contexts/ChallengesContext";
import {
  Container,
  WinExperience,
  ChallengeContent,
  TextNewChallenge,
  ChallengeDescription,
  ChallengeFooter,
  ChallengeFailedButton,
  TextChallengeFailed,
  ChallengeSucceededButton,
  TextChallengeSucceeded,
} from "./styles";

interface ChallengeActiveProps {
  activeChallenge: Challenge;
  handleChallengeSucceeded: () => void;
  handleChallengeFailed: () => void;
}

function ChallengeActive({
  activeChallenge,
  handleChallengeSucceeded,
  handleChallengeFailed,
}: ChallengeActiveProps) {
  function getimageType(type: typeChallenge) {
    switch (type) {
      case "body":
        return <BodySvg />;
      case "eye":
        return <EyeSvg />;
    }
  }

  return (
    <Container>
      <WinExperience>Ganhe {activeChallenge.amount} xp</WinExperience>

      <ChallengeContent>
        {getimageType(activeChallenge.type)}
        <TextNewChallenge>Novo desafio</TextNewChallenge>
        <ChallengeDescription>
          {activeChallenge.description}
        </ChallengeDescription>
      </ChallengeContent>

      <ChallengeFooter>
        <ChallengeFailedButton onPress={handleChallengeFailed}>
          <TextChallengeFailed>Falhei</TextChallengeFailed>
        </ChallengeFailedButton>

        <ChallengeSucceededButton onPress={handleChallengeSucceeded}>
          <TextChallengeSucceeded>Completei</TextChallengeSucceeded>
        </ChallengeSucceededButton>
      </ChallengeFooter>
    </Container>
  );
}

export { ChallengeActive };
