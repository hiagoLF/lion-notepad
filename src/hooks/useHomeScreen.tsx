import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { useDataBase } from "../contexts/DataBaseContext";

export default function useHomeScreen() {
  const { notes } = useDataBase();
  const navigation = useNavigation();
  const [snackVisible, setSnackVisible] = useState(false);

  const handleCardNotePress = () => {
    if(snackVisible) return
    setSnackVisible(true);
    setTimeout(() => setSnackVisible(false), 2000);
  };

  const handleAddButtonPress = async () => {
    navigation.navigate("Note" as never, { noteId: undefined } as never);
  };

  return { handleAddButtonPress, notes, snackVisible, handleCardNotePress };
}
