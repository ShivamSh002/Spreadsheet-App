import React from 'react';
import { useStore } from '../store/useStore';

const Grid = () => {
  const { cells, updateCell } = useStore();

  const columnLabels = Array.from({ length: cells[0].length }, (_, i) =>
    String.fromCharCode(65 + i)
  ); 

  return (
    <div className="p-4">
      <div className="grid grid-cols-11 gap-1">
       
        <div></div>

       
        {columnLabels.map((label) => (
          <div key={label} className="border p-2 text-center font-bold bg-gray-100">
            {label}
          </div>
        ))}

        {cells.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {/* Row label */}
            <div className="border p-2 text-center font-bold bg-gray-100">
              {rowIndex + 1}
            </div>

            {/* Cells */}
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                className="border p-2 text-center"
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Grid;
