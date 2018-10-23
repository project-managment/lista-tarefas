import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Listar from './components/pages/Listar';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro'
import Navbar from './components/layout/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Listar" component={Listar} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Cadastro" component={Cadastro} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
