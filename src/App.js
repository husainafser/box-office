import React from "react";

import {Switch,Route} from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/">hhusain</Route>
      <Route exact path="/starred">starred</Route>
      <Route>This is 404 Page</Route>
    </Switch>
  );
}

export default App;