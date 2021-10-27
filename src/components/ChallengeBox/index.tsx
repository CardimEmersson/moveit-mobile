import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LevelUpSvg from "../../assets/icons/level-up.svg";
import { ChallengeActive } from "../ChallengeActive";
import { ModalLevelUp } from "../ModalLevelUp";
import {
  Container,
  ChallengeNotActive,
  Title,
  ContentWrapper,
  Subtitle,
} from "./styles";

function ChallengeBox() {
  return (
    <Container>
      <ChallengeActive />

      {/* <ChallengeNotActive>
        <Title>{"Finalize um ciclo \n para receber um desafio"}</Title>
        <ContentWrapper>
          <LevelUpSvg width={RFValue(40)} />
          <Subtitle>Avance de level completando desafios</Subtitle>
        </ContentWrapper>
      </ChallengeNotActive> */}
    </Container>
  );
}

export { ChallengeBox };
