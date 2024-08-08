
import create from 'zustand';

export const useStore = create((set) => ({
  cells: Array(100).fill("").map(() => Array(10).fill("")),
  updateCell: (row, col, value) =>
    set((state) => {
      const updatedCells = [...state.cells];
      updatedCells[row][col] = value;
      return { cells: updatedCells };
    }),
}));
