import React from 'react';
import { Main } from './components/Main/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const navbar = {
  OFF: "OFF",
  ON: "ON"
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App;
