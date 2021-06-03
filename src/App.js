import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./container/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
