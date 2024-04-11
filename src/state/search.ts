import { create } from "zustand";

interface IStore {
  searchValue: string;
  updateSearchValue: (value: string) => void;
}

export const searchStore = create<IStore>((set) => ({
  searchValue: "",
  updateSearchValue(value) {
    set(() => ({ searchValue: value }));
  },
}));
