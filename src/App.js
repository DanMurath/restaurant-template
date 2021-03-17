import Nav from "./comp/Nav";

import Home from "./comp/pages/Home/Home";
import Menu from "./comp/pages/Menu/Menu";

import Map from "./comp/Map";
import Email from "./comp/Email";
import Footer from "./comp/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
        <Map />
        <Email />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
