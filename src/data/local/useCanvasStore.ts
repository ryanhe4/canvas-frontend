import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type FigureRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  key: string;
}

export type CanvasMode = 'EMPTY' | 'SELECT' | 'CREATE'

type CanvasState = {
  figures: FigureRect[],
  mode: CanvasMode,
  selectId: string | null,
  // TODO: history:
  actions: {
    updateMode: (mode: CanvasMode) => void;
    updateSelectedRect: (id: string | null) => void;
    addFigure: (newFigure: FigureRect) => void;
    clearCanvas: () => void;
  }
}

const useCanvsStore = create<CanvasState>()(
  devtools((set) => ({
    figures: [],
    mode: 'EMPTY',
    selectId: null,
    actions: {
      addFigure: (newFigure: FigureRect) => set((state) => ({
        ...state,
        figures: [...state.figures, newFigure],
      })),
      updateSelectedRect: (id: string | null) => set((state) => ({
        ...state,
        selectId: id,
      })),
      updateMode: (mode: CanvasMode) => set((state) => ({
        ...state,
        mode: mode,
      })),
      clearCanvas: () => set((state) => ({
        ...state,
        figures: [],
      })),
    },
  })),
)

export const useFigures = () => useCanvsStore((state) => state.figures)
export const useCanvasMode = () => useCanvsStore((state) => state.mode)
export const useFigureActions = () => useCanvsStore((state) => state.actions)
export const useCanvasSelect = () => useCanvsStore((state) => state.selectId)
