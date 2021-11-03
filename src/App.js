import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './index.css';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import NavTabs from './components/NavTabs';
import Footer from './components/Footer'

function App() {

    return (
        <div>
            <Router>
                <div>
                    
                    <NavTabs />
                    <AnimatePresence>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </Switch>
                        </AnimatePresence>
                        <AnimatePresence>
                        <Switch>
                            <Route path="/About">
                                <About />
                            </Route>
                        </Switch>
                        </AnimatePresence>
                        <AnimatePresence>
                        <Switch>
                            <Route path="/Portfolio">
                                <Portfolio />
                            </Route>
                        </Switch>
                        </AnimatePresence>
                        <AnimatePresence>
                        <Switch>
                            <Route path="/Contact">
                                <Contact />
                            </Route>
                        </Switch>
                        </AnimatePresence>
                        <AnimatePresence>
                        <Switch>
                            <Route path="/Resume">
                                <Resume />
                            </Route>
                        </Switch>
                        </AnimatePresence>
                    <Footer/>
                        </div>
            </Router>
                </div>
    );
}
export default App;

