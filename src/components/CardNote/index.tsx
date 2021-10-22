import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { CardObject } from "./styles";

type CardNoteProps = {
  title: string;
  text: string;
  noteId?: number;
  onPress?: () => void;
};

const CardNote: React.FC<CardNoteProps> = ({ title, text, noteId, onPress }) => {
  const navigation = useNavigation();

  const handleCardLongPress = () =>
    navigation.navigate("Note" as never, { noteId } as never);

  return (
    <CardObject onLongPress={handleCardLongPress} onPress={onPress}>
      <Card.Title title={title} />

      <Card.Content>
        <Paragraph>{text}</Paragraph>
      </Card.Content>
    </CardObject>
  );
};

export default CardNote;
