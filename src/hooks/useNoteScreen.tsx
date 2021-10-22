import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { useDataBase } from "../contexts/DataBaseContext";
import Note from "../db/models/Note";
import { ParamList } from "../types/notesPage";

export default function useNoteScreen() {
  const navigation = useNavigation();
  const { insertNote, removeNote, updateNote } = useDataBase();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const {
    params: { noteId },
  } = useRoute<RouteProp<ParamList, "Note">>();

  const handleGoBackButtonPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (!noteId) return;
    stablishNoteInPage();
  }, []);

  const stablishNoteInPage = async () => {
    if (!noteId) return;
    const foundNote = await Note.find(noteId);
    setTitle(foundNote.title);
    setText(foundNote.text);
  };

  const handleConfirmButtonPress = async () => {
    if (noteId) {
      updateNote({ title, text, id: noteId });
      navigation.goBack();
    } else {
      await insertNote({
        title,
        text,
      });
      navigation.goBack();
    }
  };

  const handleRemoveButtonPress = async () => {
    if (!noteId) return;
    await removeNote(noteId);
    navigation.goBack();
  };

  return {
    handleGoBackButtonPress,
    title,
    setTitle,
    text,
    setText,
    handleConfirmButtonPress,
    noteId,
    handleRemoveButtonPress,
  };
}
