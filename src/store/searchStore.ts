import { create } from "zustand";

type SearchStore = {
  searchMovie: string;
  addSearch: (query: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchMovie: '',
  addSearch: (query) => {
    set(() => ({
      searchMovie: query,
    }));
  },
}));
