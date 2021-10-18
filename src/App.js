import './index.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";

// import Home from './components/pages/Home';
// import Portfolio from './components/pages/Portfolio';
// import About from './components/pages/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portofolio</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router> */}

      
      {/* <PortfolioContainer /> */}
      
    </div>
  );
    
}

export default App;
