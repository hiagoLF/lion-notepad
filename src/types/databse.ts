export type Note = {
  id?: number;
  title?: string;
  text?: string;
};

export type InsertNote = (noteProps: Note) => Promise<void>;

export type RemoveNote = (noteId: number) => Promise<void>;

export type UpdateNote = (note: Note) => Promise<void>;

export type DataBaseContextType = {
  notes: Note[];
  insertNote: InsertNote;
  removeNote: RemoveNote;
  updateNote: UpdateNote
};
