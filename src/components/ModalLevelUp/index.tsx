import React, { useState } from "react";
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

function ModalLevelUp() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <Overlay>
        <Container>
          <CloseButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
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
            <NewLevel>2</NewLevel>
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
