import React from 'react';
import Bar from './Bar';

function BarGraph({ data, onInputChange, onAddInputField, showAddNumberField, color, longer }) {
    const width=60;
  return (
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      {data.map((value, index) => (
          <div key={index} className="mb-3 mt-3">
        <Bar value={value} width={width} color={color} longer={longer} />
          <input
          style={{width: `${width}px`}}
            type="number"
            value={value}
            onChange={(e) => onInputChange(index, e.target.value)}
            className="form-control p-1"
          />
        </div>
      ))}
      {showAddNumberField && <button onClick={onAddInputField} className="btn btn-primary">Add Input Field</button>}
    </div>
  );
}

export default BarGraph;
