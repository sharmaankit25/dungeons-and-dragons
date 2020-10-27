import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-primary">Dungeons and Dragons</h1>
      </header>
      <Router>
          <Switch>
              {
                routes.map(r => <Route {...r} key={r.path} />)
              }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
