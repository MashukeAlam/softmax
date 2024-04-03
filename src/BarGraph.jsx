import React from 'react';
import Bar from './Bar';

function BarGraph({ data, onInputChange, onAddInputField }) {
    const width=50;
  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      {data.map((value, index) => (
          <div key={index}>
        <Bar value={value} width={width} />
          <input
          style={{width: `${width}px`}}
            type="number"
            value={value}
            onChange={(e) => onInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={onAddInputField}>Add Input Field</button>
    </div>
  );
}

export default BarGraph;
