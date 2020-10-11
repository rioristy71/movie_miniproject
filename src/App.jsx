import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetail } from "./components/moviedetail/MovieDetail";
<<<<<<< HEAD
import LoginBtn from "./components/general/small-component/LoginBtn";
=======
>>>>>>> b5fe3c705353f398ad9e2c0242f7d320b6a4377a
import login from "./components/general/small-component/login";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={login} exact />
<<<<<<< HEAD

=======
>>>>>>> b5fe3c705353f398ad9e2c0242f7d320b6a4377a
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default App;
