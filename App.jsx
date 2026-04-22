import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px' }}>
      <h1>React Component</h1>
      <p>This is a simple React file created for your project.</p>
      <button onClick={() => alert('Hello from React!')}>Click me</button>
    </div>
  );
}

export default App;