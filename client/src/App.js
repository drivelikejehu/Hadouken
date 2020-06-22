import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import Navbar from './components/persistent/Navbar/Navbar'
import Account from './pages/Account/Account'
import Games from './pages/Games/Games'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'
import SF2 from './pages/SF2/SF2'
import SF2Guile from './pages/SF2/Characters/SF2Guile'
import Footer from './components/persistent/Footer/Footer.jsx'

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
        <Footer/>
      </Router>
      </>
  );
}

export default App;
