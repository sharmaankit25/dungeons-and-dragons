import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dungeons and Dragons</h1>
      </header>
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
