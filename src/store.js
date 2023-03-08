import create from "zustand";

export const useData = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));

export const usePosition = create((set) => ({
  position: null,
  setPosition: (position) => set({ position }),
}));
