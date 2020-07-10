import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from 'react-dom'
// import Button from '@material-ui/core/Button'
import Navbar from "./components/Shared/Navbar/Navbar";
import Account from "./pages/Account/Account";
import Games from "./pages/Games/Games";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import SF2 from "./pages/SF2/SF2";
import SF2Guile from "./pages/SF2/Characters/SF2Guile";
import Footer from "./components/Shared/Footer/Footer";
import Tek7 from "./pages/Tek7/Tek7";
import SSBU from "./pages/SSBU/SSBU";
import DBFZ from "./pages/DBFZ/DBFZ";
import Combos from "./pages/ComboList/ComboList";


function App() {

  return (
    <>
      <Router>
        <main>
          <article>
            <Navbar />
            <Switch>
              <Route exact path={["/", "/login"]}>
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path={["/games", "/home"]}>
                <Games />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path="/combos">
                <Combos />
              </Route>
              <Route exact path="/SF2">
                <SF2 />
              </Route>
              <Route exact path="/SF2guile">
                <SF2Guile />
              </Route>
              <Route exact path="/DBFZ">
                <DBFZ />
              </Route>
              <Route exact path="/tekken7">
                <Tek7 />
              </Route>
              <Route exact path="/SSBU">
                <SSBU />
              </Route>
              <Route exact path={["*"]}>
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </article>
        </main>
      </Router>
    </>
  );
}

export default App;
