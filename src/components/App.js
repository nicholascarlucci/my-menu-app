import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import MenusPage from "./menus/MenusPage";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/menus" component={MenusPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
