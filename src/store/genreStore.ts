import { create } from "zustand";

type GenreStore = {
  genre: number;
  addGenre: (genre: number) => void;
};

export const useGenreStore = create<GenreStore>((set) => ({
  genre: 28,
  addGenre: (genreId) => {
    set(() => ({
      genre: genreId,
    }));
  },
}));
