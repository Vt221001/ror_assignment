import React from "react";

const MatrixInput = ({ rows, cols, onChange, value }) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {Array.from({ length: rows }).map((_, i) => (
          <tr key={i}>
            {Array.from({ length: cols }).map((_, j) => (
              <td
                key={j}
                style={{
                  border: "1px solid #000",
                  padding: "4px",
                }}
              >
                <input
                  type="number"
                  style={{ width: "50px" }}
                  value={value[i]?.[j] || ""}
                  onChange={(e) => onChange(i, j, Number(e.target.value))}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MatrixInput;
