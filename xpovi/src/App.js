import logo from './logo.svg';
import './App.css';
import ButtonNew from './components/_Button';
import Questionnaire from './pages/Questionnaire';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/questionnaire">
            <Questionnaire />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
