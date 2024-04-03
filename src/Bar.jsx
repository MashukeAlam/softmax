import React from 'react';

const Bar = ({ value, width, color }) => {
  return (
    <div style={{ width: `${width}px`, height: `${value * 5}px`, backgroundColor: `${color}`, margin: '5px' }}>
      
    </div>
  );
};

export default Bar;
