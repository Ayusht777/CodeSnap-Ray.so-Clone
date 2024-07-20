import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreState = {
  code: string;
  title: string;
  Language: string;
  currentTheme: string;
  fontStyle: string;
  padding: number;
  showBackground: boolean;
  darkMode: boolean;
  fontSize: number;
  autoDetectLanguage: boolean;
};

export const useStore = create<StoreState>()(
  persist(
    (_set) => ({
      code: "",
      title: "Untitled",
      Language: "plaintext",
      currentTheme: "crimson",
      fontStyle: "jetBrainsMono",
      padding: 16,
      showBackground: true,
      darkMode: true,
      fontSize: 16,
      autoDetectLanguage: true,
    }),
    {
      name: "code-editor-storage",
    },
  ),
);
