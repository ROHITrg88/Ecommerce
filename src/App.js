import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing}></Route>
        <Route path="/product/:productId" component={ProductDetails}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </div>
  );
};

export default App;
