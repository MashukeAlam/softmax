import React, {useState} from 'react';
import BarGraph from './BarGraph';

function App() {
  const [data, setData] = useState([5]); // Initial data array
  const [inputValues, setInputValues] = useState(Array.from({ length: data.length }, () => ''));

  const handleInputChange = (index, value) => {
    const newData = [...data];
    newData[index] = parseFloat(value);
    setData(newData);
  };

  // Function to add a new input field
  const handleAddInputField = () => {
    setData([...data, 0]);
  };
  return (
    <div>
      <BarGraph data={data}  onInputChange={handleInputChange} onAddInputField={handleAddInputField}  />
    </div>
  );
}

export default App;
