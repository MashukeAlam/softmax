import React from 'react';
import EulerBox from './EulerBox';

function SoftMax({ data }) {
    const width=60;
    const height=90;
  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      {data.map((value, index) => (
        <EulerBox value={value} width={width} height={height} />
      ))}
    </div>
  );
}

export default SoftMax;
