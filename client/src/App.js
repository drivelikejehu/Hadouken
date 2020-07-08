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
// import Footer from "./components/Shared/Footer/Footer";
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
              <Route exact path="/games">
                <Games />
              </Route>
              <Route exact path="/account">
                <Account />
              </Route>
              <Route exact path={["*"]}>
                <NotFound />
              </Route>
            </Switch>
            {/* <Footer /> */}
          </article>
        </main>
      </Router>
    </>
  );
}

export default App;
