import React from "react";
import { FlatList } from "react-native";
import { AddButton, HomeScreenContainer } from "./styles";
import CardNote from "../../components/CardNote";
import { Appbar, Snackbar } from "react-native-paper";
import useHomeScreen from "../../hooks/useHomeScreen";

type RenderCardsProps = {
  item: { title?: string; text?: string; id?: number };
};

const HomeScreen: React.FC = () => {
  const { handleAddButtonPress, notes, snackVisible, handleCardNotePress } =
    useHomeScreen();

  return (
    <HomeScreenContainer>
      <Appbar.Header>
        <Appbar.Content title="Notas" />
      </Appbar.Header>

      <AddButton onPress={handleAddButtonPress}>Adicionar</AddButton>

      <Snackbar visible={snackVisible} onDismiss={() => {}}>
        Pressione e segure a nota para editar-la{" "}
      </Snackbar>

      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <CardNote
            title={item.title || "Nenhum Título"}
            text={item.text || "Nenhum Texto"}
            noteId={item.id}
            onPress={handleCardNotePress}
          />
        )}
        keyExtractor={(item) => item.id?.toString() || ""}
      />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
