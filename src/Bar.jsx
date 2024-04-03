import React from 'react';

const Bar = ({ value }) => {
  return (
    <div style={{ width: '100px', height: `${value * 10}px`, backgroundColor: 'blue', margin: '5px' }}>
      {value}
    </div>
  );
};

export default Bar;
