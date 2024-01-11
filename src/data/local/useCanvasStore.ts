import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type FigureRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  key: string;
}

type CanvasState = {
  figures: FigureRect[],

  // history:
  actions: {
    addFigure: (newFigure: FigureRect) => void;
    clearCanvas: () => void;
  }
}

const useCanvsStore = create<CanvasState>()(
  devtools((set) => ({
    figures: [],
    actions: {
      addFigure: (newFigure: FigureRect) => set((state) => ({
        ...state,
        figures: [...state.figures, newFigure],
      })),
      clearCanvas: () => set((state) => ({
        ...state,
        figures: [],
      })),
    },
  })),
)

export const useFigures = () => useCanvsStore((state) => state.figures)
export const useFigureActions = () => useCanvsStore((state) => state.actions)
