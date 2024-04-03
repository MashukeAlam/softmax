import React, {useState} from 'react';
import BarGraph from './BarGraph';
import SoftMax from './SoftMax';
import './App.css';

function App() {
  const [data, setData] = useState([5]); // Initial data array
  const [softmaxArray, setSoftmaxArray] = useState(calculateSoftmax(data)); // Initial softmax array
  const [inputValues, setInputValues] = useState(Array.from({ length: data.length }, () => ''));

  const handleInputChange = (index, value) => {
    const newData = [...data];
    newData[index] = parseFloat(value);
    setData(newData);
    setSoftmaxArray(calculateSoftmax(newData));
  };

  // Function to add a new input field
  const handleAddInputField = async () => {
    setData([...data, 0]);
    setSoftmaxArray(calculateSoftmax([...data, 0]));
  };

  function calculateSoftmax(arr) {
    const expArray = arr.map(value => Math.exp(value));
    const sumExp = expArray.reduce((acc, curr) => acc + curr, 0);
    return expArray.map(value => ((value / sumExp) * 100).toFixed(2));
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
      <h4>Softmax Visualization</h4>
      <button onClick={handleAddInputField} className="btn btn-warning">+ Add</button>
      <BarGraph data={data}  onInputChange={handleInputChange} onAddInputField={handleAddInputField} showAddNumberField={false} color={'lightblue'} longer={false}  />
      <SoftMax data={data} />
      <BarGraph data={softmaxArray}  onInputChange={handleInputChange} onAddInputField={handleAddInputField} showAddNumberField={false} color={'lightgreen'} longer={true} />
    </div>
  );
}

export default App;
