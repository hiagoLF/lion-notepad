import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Note from "../db/models/Note";
import {
  DataBaseContextType,
  InsertNote,
  RemoveNote,
  Note as NoteType,
} from "../types/databse";

const DataBaseContext = createContext<DataBaseContextType>({
  notes: [],
  insertNote: async () => {},
  removeNote: async () => {},
  updateNote: async () => {},
});

export const DataBaseProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const insertNote: InsertNote = async (noteProps) => {
    await Note.create(noteProps);
    await findNotes();
  };

  const removeNote: RemoveNote = async (noteId) => {
    await Note.destroy(noteId);
    await findNotes();
  };

  const startDataBase = async () => {
    await Note.createTable();
    await findNotes();
  };

  const findNotes = async () => {
    const foundNotes = await Note.query();
    if (!foundNotes) return;
    setNotes(foundNotes);
  };

  const updateNote = async (note: NoteType) => {
    const noteToUpdate = await Note.find(note.id);
    noteToUpdate.title = note.title;
    noteToUpdate.text = note.text;
    await noteToUpdate.save();
    await findNotes();
  };

  useEffect(() => {
    startDataBase();
  }, []);

  return (
    <DataBaseContext.Provider
      value={{ notes, insertNote, removeNote, updateNote }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};

export const useDataBase = () => useContext(DataBaseContext);
