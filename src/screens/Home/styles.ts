import styled from "styled-components/native";
import { Button, Card } from "react-native-paper";

export const HomeScreenContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const AddButton = styled(Button).attrs({
  mode: "outlined",
  icon: "comment-plus",
})`
  margin: 20px 10px 5px 10px;
`;

