import React from 'react';

const EulerBox = ({ value, width, height }) => {
  return (
    <div className='gradient' style={{ width: `${width}px`, height: `${height}px`, backgroundColor: 'grey', margin: '5px', borderRadius: '5px' }}>
      <span>x={value}</span>
      <br />
      <span>e<sup>{value}</sup></span>
      <br />
      <span>e<sup>{value}</sup>/Σe<sup>x</sup></span>
    </div>
  );
};

export default EulerBox;
