
import create from 'zustand';

export const useStore = create((set) => ({
  cells: Array(100).fill("").map(() => Array(10).fill("")),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  updateCell: (row, col, value) =>
    set((state) => {
      const updatedCells = [...state.cells];
      updatedCells[row][col] = value;
      return { cells: updatedCells };
    }),
  filteredCells: (state) => {
    if (!state.searchTerm) return state.cells;
    return state.cells.map(row =>
      row.map(cell => cell.includes(state.searchTerm) ? cell : "")
    );
  }
}));
