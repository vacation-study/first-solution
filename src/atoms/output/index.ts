import { atom } from "recoil"
export const output = atom<Record<string, string>[]>({
  key: "output",
  default: []
})
