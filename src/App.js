import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import Process from './components/Process/ProjectDetails';
import MyNavbar from './Navbar/MyNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/details" component={Process} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
