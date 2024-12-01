import React, { useState } from 'react';
import './App.css'; // Make sure to add styling

const BoxSplit = () => {
  const [boxes, setBoxes] = useState([{ id: 1, x: 0, y: 0, size: 100 }]);

  const handleBoxClick = (id, x, y, size) => {
    // Filter out the clicked box and add 4 smaller boxes in its place
    setBoxes(prevBoxes =>
      prevBoxes
        .filter(box => box.id !== id)
        .concat([
          { id: `${id}-1`, x, y, size: size / 2 },
          { id: `${id}-2`, x: x + size / 2, y, size: size / 2 },
          { id: `${id}-3`, x, y: y + size / 2, size: size / 2 },
          { id: `${id}-4`, x: x + size / 2, y: y + size / 2, size: size / 2 }
        ])
    );
  };

  return (
    <div className="box-container">
      {boxes.map(box => (
        <div
          key={box.id}
          className="box"
          onClick={() => handleBoxClick(box.id, box.x, box.y, box.size)}
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.size}%`,
            height: `${box.size}%`
          }}
        />
      ))}
    </div>
  );
};

export default BoxSplit;
