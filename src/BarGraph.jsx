import React from 'react';
import Bar from './Bar';

const BarGraph = ({ data }) => {
  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      {data.map((value, index) => (
        <Bar key={index} value={value} />
      ))}
    </div>
  );
};

export default BarGraph;
