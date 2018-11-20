import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {isLoggedIn} from './components/tils/Auth.js';
import Home from './components/pages/Home';
import Listar from './components/pages/Listar';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro'
import Criar from './components/pages/Criar'
import Navbar from './components/layout/Navbar';
import logo from './logo.svg';
import './App.css';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
    isLoggedIn() ? (
      <Component {...props} />
      ) : (
      <Redirect
      to='/'
      />
      )
    }
    />
    );

class App extends Component {

  render() {
    return (
      <Router>
      <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Cadastro" component={Cadastro} />
      <PrivateRoute exact path="/Listar" component={Listar} />
      <PrivateRoute exact path="/Criar" component={Criar} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
