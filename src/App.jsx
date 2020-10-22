import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
import LoginBtn from "./components/general/small-component/LoginBtn";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={LoginBtn} exact />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default App;
