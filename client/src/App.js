import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Navbar from "./Navbar";
import Person from "./Person";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/people/:id">
          <Person />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
