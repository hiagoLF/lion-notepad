import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/Home";
import NoteScreen from "./src/screens/Note";
import { DataBaseProvider } from "./src/contexts/DataBaseContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DataBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataBaseProvider>
  );
}
