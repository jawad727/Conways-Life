import React from 'react';
import Grid from './components/grid/Grid.js'

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Conway's Game of Life</h1>
      <Grid />
    </div>
  );
}

export default App;