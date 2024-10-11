// src/components/Calculator.tsx
import React, { useState } from 'react';
import { add } from '../utils/calculator';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter numbers e.g. "1,2,3"'
        style={styles.input}
      />
      <button onClick={handleCalculate} style={styles.button}>Calculate</button>
      {result !== null && <div style={styles.result}>Result: {result}</div>}
      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#28a745',
  },
  error: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#dc3545',
  },
};

export default Calculator;
