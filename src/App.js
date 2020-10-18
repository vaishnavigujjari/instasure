import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/Signup";
import Links from "./components/Links/Links";
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/links" component={Links} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
