// import "./styles.css";
// import Menu from "./components/Menu";
import React from 'react'
import Menu from './components/Menu';
import WordDetails from './dictionary/details/WordDetails'
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/showdetails" exact component={WordDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;