import React, { useState, useContext } from "react";
import { Alert, Modal } from "react-native";
import NewLevelSvg from "../../assets/icons/levelup.svg";
import CloseSvg from "../../assets/icons/close.svg";
import {
  Container,
  NewLevel,
  Congratulations,
  Info,
  SocialMediaButtons,
  ShareTwitterButton,
  TextTwitter,
  NewLevelWrapper,
  Overlay,
  CloseButton,
} from "./styles";
import { ChallengesContext } from "../../contexts/ChallengesContext";

function ModalLevelUp() {
  const { level, closeLevelUpModal, isLevelUpModalOpen } =
    useContext(ChallengesContext);

  return (
    <Modal animationType="fade" transparent={true} visible={isLevelUpModalOpen}>
      <Overlay>
        <Container>
          <CloseButton onPress={closeLevelUpModal}>
            <CloseSvg />
          </CloseButton>

          <NewLevelWrapper>
            <NewLevelSvg
              style={{
                position: "absolute",
              }}
              width={200}
              height={150}
            />
            <NewLevel>{level}</NewLevel>
          </NewLevelWrapper>
          <Congratulations>Parabéns</Congratulations>
          <Info>Você alcançou um novo level.</Info>

          {/* <SocialMediaButtons>
            <ShareTwitterButton>
              <TextTwitter>Twitter</TextTwitter>
            </ShareTwitterButton>
          </SocialMediaButtons> */}
        </Container>
      </Overlay>
    </Modal>
  );
}

export { ModalLevelUp };
