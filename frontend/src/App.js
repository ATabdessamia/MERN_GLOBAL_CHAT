import React from "react";
import { Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Room from "./components/Room";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Login} />
      <Route path="/singup" exact component={Signup} />
      <Route path="/room" exact component={Room} />
    </Router>
  );
};

export default App;
