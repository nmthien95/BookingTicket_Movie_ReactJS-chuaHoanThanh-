import "./App.css";
import { createBrowserHistory } from "history";

import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import { Route, Router, Switch } from "react-router";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail.js/Detail";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy, Fragment } from "react";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const history = createBrowserHistory();

function App() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  return (
    <div className="app">
      <Fragment>{isLoading ? <Loading /> : ""}</Fragment>
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <UserTemplate path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path="/detail/:id" exact Component={Detail} />
          <HomeTemplate path="/" exact Component={Home} />
          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
