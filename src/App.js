import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Process from "./components/Process/ProjectDetails";



function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/process" component={Process} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
