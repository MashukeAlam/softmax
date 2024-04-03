import React, {useState} from 'react';
import BarGraph from './BarGraph';
import SoftMax from './SoftMax';

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
  const handleAddInputField = () => {
    setData([...data, 0]);
  };

  function calculateSoftmax(arr) {
    const expArray = arr.map(value => Math.exp(value));
    const sumExp = expArray.reduce((acc, curr) => acc + curr, 0);
    return expArray.map(value => (value / sumExp).toFixed(2));
  }

  return (
    <div >
      <BarGraph data={data}  onInputChange={handleInputChange} onAddInputField={handleAddInputField} showAddNumberField={true} color={'lightblue'}  />
      <SoftMax data={data} />
      <BarGraph data={softmaxArray}  onInputChange={handleInputChange} onAddInputField={handleAddInputField} showAddNumberField={false} color={'lightgreen'} />
    </div>
  );
}

export default App;
