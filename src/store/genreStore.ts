import { create } from "zustand";

type GenreStore = {
  genre: string;
  addGenre: (genre: string) => void;
};

export const useGenreStore = create<GenreStore>((set) => ({
  genre: "",
  addGenre: (genre) => {
    set(() => ({
      genre: genre,
    }));
  },
}));
