import React from 'react';

const Bar = ({ value, width, color, longer }) => {
    let heightMultiplier = 8;
    if (longer) {
        value = value / 100;
        heightMultiplier = 100;
    }
  return (
    <div style={{ width: `${width}px`, height: `${value * heightMultiplier}px`, backgroundColor: `${color}`, margin: '5px', borderRadius: '5px' }}>
      
    </div>
  );
};

export default Bar;
