import React, { FC, useState } from "react";
import "../../styles/App.css";

const SecondTask: FC = () => {
  const [color, setColor] = useState<string>("");
  const [diagColor, setDiagColor] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const numRows = 6;
  const numCols = 6;

  const tableData: number[][] = [];

  let count = 1;

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    for (let j = 0; j < numCols; j++) {
      row.push(count++);
    }
    tableData.push(row);
  }

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="table-container">
      <input
        className={"input"}
        type="color"
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <table className="custom-table">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`table-cell`}
                  style={
                    cell === 15
                      ? { backgroundColor: color }
                      : rowIndex + colIndex === numRows - 1
                      ? { backgroundColor: diagColor }
                      : {}
                  }
                  onMouseOver={() => cell === 15 && setColor(getRandomColor())}
                  onClick={() => cell === 15 && setColor(selectedColor)}
                  onDoubleClick={() =>
                    cell === 15 && setDiagColor(getRandomColor())
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecondTask;
