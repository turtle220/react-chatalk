import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login/';
import Home from './pages/Home';
import Header from './pages/Header/';
import Footer from './pages/Footer/';
import Dashboard from './pages/Dashboard/';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Header />
                        <Login />
                        <Footer />
                    </Route>
                    <Route path="/welcome">
                        <Header />
                        <Welcome />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
