import React from 'react';

const Bar = ({ value, width }) => {
  return (
    <div style={{ width: `${width}px`, height: `${value * 10}px`, backgroundColor: 'blue', margin: '5px' }}>
      {value}
    </div>
  );
};

export default Bar;
