import React, { useState } from "react";

import "./styles.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(16)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div className="container" style={{ background: color }}>
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? () => handleCreateRandomHexColor()
              : () => handleCreateRandomRgbColor()
          }
        >
          Generate Random Color
        </button>
      </div>
      <h2>
        {typeOfColor === "hex" ? "HEX Color: " : "RGB Color: "}
        {color}
      </h2>
    </div>
  );
};

export default RandomColor;
