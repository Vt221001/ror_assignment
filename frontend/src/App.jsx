import React, { useState } from "react";
import axios from "axios";
import MatrixInput from "./components/MatrixInput";

const App = () => {
  const [rowsA, setRowsA] = useState(4);
  const [colsA, setColsA] = useState(2);
  const [rowsB, setRowsB] = useState(2);
  const [colsB, setColsB] = useState(3);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState(null);

  const handleMatrixChange = (matrix, setMatrix) => (row, col, value) => {
    const newMatrix = [...matrix];
    if (!newMatrix[row]) newMatrix[row] = [];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  };

  const calculateMatrixMultiplication = async () => {
    try {
      const response = await axios.post("http://localhost:3000/multiply", {
        matrixA,
        matrixB,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const clearMatrices = () => {
    setMatrixA(
      Array(rowsA)
        .fill(0)
        .map(() => Array(colsA).fill(0))
    );
    setMatrixB(
      Array(rowsB)
        .fill(0)
        .map(() => Array(colsB).fill(0))
    );
    setResult(null);
  };

  return (
    <div className="p-6 font-sans bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Matrix Multiplication
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <div>
          <label className="font-semibold">Matrix A Size:</label>
          <select
            className="border p-2 mx-2"
            value={rowsA}
            onChange={(e) => setRowsA(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          x
          <select
            className="border p-2 mx-2"
            value={colsA}
            onChange={(e) => setColsA(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold">Matrix B Size:</label>
          <select
            className="border p-2 mx-2"
            value={rowsB}
            onChange={(e) => setRowsB(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          x
          <select
            className="border p-2 mx-2"
            value={colsB}
            onChange={(e) => setColsB(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-12 justify-center mt-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Matrix A</h3>
          <MatrixInput
            rows={rowsA}
            cols={colsA}
            value={matrixA}
            onChange={handleMatrixChange(matrixA, setMatrixA)}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Matrix B</h3>
          <MatrixInput
            rows={rowsB}
            value={matrixB}
            cols={colsB}
            onChange={handleMatrixChange(matrixB, setMatrixB)}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          onClick={calculateMatrixMultiplication}
        >
          Calculate
        </button>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
          onClick={clearMatrices}
        >
          Clear
        </button>
      </div>

      {result && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Result:</h3>
          <table className="border-collapse border border-gray-500 mx-auto">
            <tbody>
              {result.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border border-gray-500 px-4 py-2 text-center"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
