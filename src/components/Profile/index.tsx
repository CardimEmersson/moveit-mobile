import React, { useContext } from "react";
import LevelSvg from "../../assets/icons/level.svg";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import {
  Container,
  ImageProfile,
  DataProfileWrapper,
  Name,
  LevelWrapper,
  LevelNumber,
} from "./styles";

function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <ImageProfile source={{ uri: "https://github.com/CardimEmersson.png" }} />
      <DataProfileWrapper>
        <Name>Emersson Cardim</Name>
        <LevelWrapper>
          <LevelSvg />
          <LevelNumber>{`Level ${level}`}</LevelNumber>
        </LevelWrapper>
      </DataProfileWrapper>
    </Container>
  );
}

export { Profile };
