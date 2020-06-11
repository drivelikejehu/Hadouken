import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import './App.css';
import Navbar from './components/persistent/Navbar'
import Account from './pages/account/account'
import Games from './pages/games/games'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import NotFound from './pages/NotFound/NotFound'
import SF2 from './pages/SF2/SF2'
import SF2Guile from './pages/SF2/Characters/SF2Guile'
import Footer from './components/persistent/Footer'

function App() {
  
  return (
    <>
    <Router>
      <main>
        <article>
        <Navbar/>
        <Switch>
        <Route 
          exact path={["/", "/login"]}
          >
        <Login />
        <Route exact path="/signup">
          <Signup/>
          </Route>
        </Route>
          <Route
          exact path={["/games", "/home"]}>
        <Games/>
          </Route>
          <Route
          exact path="/SF2">
        <SF2/>
          </Route>
          <Route
          exact path="/SF2guile">
        <SF2Guile/>
          </Route>
          <Route  exact path="/account">
          <Account/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </article>
      </main>
      <footer>
        <Footer/>
      </footer>
      </Router>
      </>
  );
}

export default App;
