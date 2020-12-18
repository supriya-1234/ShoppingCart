import { Route, Switch } from "react-router-dom";
import "../App.css";
import CartItems from "./CartItems";
import CartSummery from "./CartSummery/CartSummery";
import Header from "./Header";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/summery" component={CartSummery} />
        <Route path="/" component={CartItems} />
      </Switch>
    </div>
  );
}

export default App;
