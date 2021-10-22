import React from "react";
import BodySvg from "../../assets/icons/body.svg";
import {
  Container,
  WinExperience,
  ChallengeContent,
  ChallengeImage,
  TextNewChallenge,
  ChallengeDescription,
  ChallengeFooter,
  ChallengeFailedButton,
  TextChallengeFailed,
  ChallengeSucceededButton,
  TextChallengeSucceeded,
} from "./styles";

function ChallengeActive() {
  return (
    <Container>
      <WinExperience>Ganhe 400 xp</WinExperience>

      <ChallengeContent>
        {/* <ChallengeImage source={{ uri: `../../assets/icons/body.svg` }} /> */}
        <BodySvg />
        <TextNewChallenge>Novo desafio</TextNewChallenge>
        <ChallengeDescription>
          É agora Emersson, bora lá meu parça. Caminhe por 3 minutos e estique
          suas pernas pra você ficar saudável.
        </ChallengeDescription>
      </ChallengeContent>

      <ChallengeFooter>
        <ChallengeFailedButton>
          <TextChallengeFailed>Falhei</TextChallengeFailed>
        </ChallengeFailedButton>

        <ChallengeSucceededButton>
          <TextChallengeSucceeded>Completei</TextChallengeSucceeded>
        </ChallengeSucceededButton>
      </ChallengeFooter>
    </Container>
  );
}

export { ChallengeActive };
