import React from 'react';
import Bar from './Bar';

function BarGraph({ data, onInputChange, onAddInputField, showAddNumberField, color, longer }) {
    const width=60;
    
  return (
    <div style={{display: 'flex', alignItems: longer ? 'flex-start'  : "flex-end" }}>
      {data.map((value, index) => (
          <div key={index} className="mb-3 mt-3" style={{display: 'flex', flexDirection: longer ? 'column-reverse' : 'column'}}>
        <Bar value={value} width={width} color={color} longer={longer} />
          <input
          style={{width: `${width}px`}}
            type={longer ? "text" :"number"}
            value={longer ? `${value}%` : value}
            onChange={(e) => onInputChange(index, e.target.value)}
            className="form-control p-1"
            readOnly={longer}
          />
        </div>
      ))}
      {showAddNumberField && <button onClick={onAddInputField} className="btn btn-primary">Add Input Field</button>}
    </div>
  );
}

export default BarGraph;
