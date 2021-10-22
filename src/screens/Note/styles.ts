import styled from 'styled-components/native';
import { TextInput } from "react-native-paper";


export const NoteScreenContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const StyledTextInput = styled(TextInput)`
  margin: 5px;
`

export const ButtonsContainer = styled.View`
  margin: 5px;
  height: 100px;
  justify-content: space-between;
`;