import React from "react";
import { Appbar } from "react-native-paper";
import {
  ButtonsContainer,
  NoteScreenContainer,
  StyledTextInput,
} from "./styles";
import { Button } from "react-native-paper";
import useNoteScreen from "../../hooks/useNoteScreen";

const NoteScreen: React.FC = () => {
  const {
    handleGoBackButtonPress,
    title,
    setTitle,
    text,
    setText,
    handleConfirmButtonPress,
    noteId,
    handleRemoveButtonPress,
  } = useNoteScreen();

  return (
    <NoteScreenContainer>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleGoBackButtonPress} />
        <Appbar.Content title="Anotação" />
      </Appbar.Header>

      <StyledTextInput
        label="Título"
        value={title}
        onChangeText={(t) => setTitle(t)}
      />

      <StyledTextInput
        label="Texto"
        value={text}
        onChangeText={(t) => setText(t)}
        multiline
      />

      <ButtonsContainer>
        <Button
          icon="check-circle"
          mode="contained"
          disabled={!title || !text}
          onPress={handleConfirmButtonPress}
        >
          Confirmar
        </Button>

        {noteId && (
          <Button
            icon="trash-can-outline"
            mode="text"
            onPress={handleRemoveButtonPress}
            disabled={!noteId}
          >
            Remover
          </Button>
        )}
      </ButtonsContainer>
    </NoteScreenContainer>
  );
};

export default NoteScreen;
