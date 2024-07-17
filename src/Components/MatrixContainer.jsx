import { useState } from "react";

const MatrixContainer = () => {
  const [colors, setColors] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  console.log(colors.length);

  const handleClick = (index) => {
    // copying colors array immutably
    const newColors = [...colors];

    // setting new colors for specific index
    newColors[index] = "green";
    // updating the colors array
    setColors(newColors);

    // checking all matrix are green or not
    if (newColors.every((color) => color === "green")) {
      // selecting matrix color to orange
      const updatedColors = [
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
      ];

      // changing all matrix color to orange
      setColors(updatedColors);
    }
  };

  return (
    <div className="w-[300px] grid grid-cols-3 gap-1">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{ backgroundColor: color }}
          className="w-24 h-24"
        ></div>
      ))}
    </div>
  );
};

export default MatrixContainer;
