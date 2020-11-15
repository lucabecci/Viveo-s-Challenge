import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CalculatorMain from "./pages/CalculatorMain";
import Creator from "./pages/Creator";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={CalculatorMain} />
        <Route path="/creator" component={Creator} />
      </div>
    </Router>
  );
}

export default App;
