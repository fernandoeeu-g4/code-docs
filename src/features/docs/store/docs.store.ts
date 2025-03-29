import { atom } from "jotai";

export const currentFileAtom = atom<string>(
  "src/features/users/components/user-list.tsx"
);
