import React, {useState} from 'react';
import BarGraph from './BarGraph';

function App() {
  const [data, setData] = useState([5, 10, 15, 20, 25]); // Initial data array
  const [inputValues, setInputValues] = useState(Array.from({ length: data.length }, () => ''));

  // Function to handle changes in input values
  const handleInputChange = (index, value) => {
    const newData = [...data];
    newData[index] = parseFloat(value);
    setData(newData);
  };

  // Function to add a new input field
  const handleAddInputField = () => {
    setData([...data, 0]);
    setInputValues([...inputValues, '']);
  };
  return (
    <div>
<h1>Bar Graph Example</h1>
      {data.map((value, index) => (
        <div key={index}>
          <input
            type="number"
            value={inputValues[index]}
            onChange={(e) => {
              const value = e.target.value;
              setInputValues((prev) => {
                const newInputValues = [...prev];
                newInputValues[index] = value;
                return newInputValues;
              });
              handleInputChange(index, value);
            }}
          />
        </div>
      ))}
      <button onClick={handleAddInputField}>Add Input Field</button>
      <BarGraph data={data} />
    </div>
  );
}

export default App;
