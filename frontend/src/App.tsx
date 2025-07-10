import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      //Artificial 2-second delay for demo
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setResult(data);
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  const getColor = (emotion: string): string => {
    switch (emotion.toLowerCase()) {
      case 'happy':
        return '#00C897';
      case 'sad':
        return '#4263EB';
      case 'anxious':
        return '#E76F51';
      case 'excited':
        return '#F4A261';
      case 'angry':
        return '#E63946';
      case 'confused':
        return '#6D6875';
      case 'neutral':
        return '#B0BEC5';
      default:
        return '#607D8B';
    }
  };
  
  return (
      <div className="App" style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Emotion Reflection Tool</h2>
      <textarea
        rows={5}
        cols={40}
        placeholder="How are you feeling?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </button>

      <div style={{ marginTop: '2rem' }}>
      {result && (
        <div
          className="flash-card"
          style={{
            padding: '1.5rem',
            borderRadius: '16px',
            width: 'fit-content',
            minWidth: '300px',
            textAlign: 'left',
            backgroundColor: getColor(result.emotion),
            color: '#fff',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <h3 style={{ margin: 0 }}>Emotion: {result.emotion}</h3>
          <p style={{ margin: '8px 0 0 0' }}>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
