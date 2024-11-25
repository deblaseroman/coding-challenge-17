import React from 'react';
import Gallery from './Gallery'; // Import the Gallery component
import './App.css'; // Import the styling for the app

const App = () => {
  return (
    <div className="App">
      <h1>Tour Comparison App</h1>
      <Gallery /> {/* Render the Gallery component here */}
    </div>
  );
};

export default App;