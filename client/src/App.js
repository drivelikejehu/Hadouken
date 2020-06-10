import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  );
}

export default App;
