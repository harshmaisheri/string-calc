import React, { useState } from 'react';
import { Add } from './utils/add';

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        const sum = Add(input);
        setResult(sum);
    };

    return (
        <div className="App">
            <h1>String Calculator</h1>
            <input type="text" value={input} onChange={handleChange} placeholder="Enter numbers" />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default App;
