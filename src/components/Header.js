import React, { useState } from 'react';




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';


function Header() {

    return (
        <div className='App-header'>
            <h1>Josh Nolan</h1>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
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
                        <Route path="/resume">
                            <resume />
                        </Route>
                    </Switch>
                </div>
            </Router>

        </div>
    )
};


export default Header