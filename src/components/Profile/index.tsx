import React, { useContext } from "react";
import LevelSvg from "../../assets/icons/level.svg";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { useAuth } from "../../hooks/auth";
import {
  Container,
  ImageProfile,
  DataProfileWrapper,
  Name,
  LevelWrapper,
  LevelNumber,
  LogoutButton,
  TextLogout,
} from "./styles";

function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user, signOut } = useAuth();

  return (
    <Container>
      <ImageProfile source={{ uri: user.photo }} />
      <DataProfileWrapper>
        <Name>{user.name}</Name>
        <LevelWrapper>
          <LevelSvg />
          <LevelNumber>{`Level ${level}`}</LevelNumber>
        </LevelWrapper>
      </DataProfileWrapper>
      <LogoutButton onPress={signOut}>
        <TextLogout>Sair</TextLogout>
      </LogoutButton>
    </Container>
  );
}

export { Profile };
