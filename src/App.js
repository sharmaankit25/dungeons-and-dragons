import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <hr />
          <Switch>
              {
                routes.map(r => <Route {...r} key={r.path} exact />)
              }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
