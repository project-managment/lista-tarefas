import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {isLoggedIn, logout} from '../tils/Auth.js';

export default class NavbarGer extends Component {
  render(){
    return(
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">WEB GERENCIA</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1}>
          {
            (isLoggedIn() ? (<Link to="/Listar"> Listar Tarefas </Link>) : (<div></div>))
          }
        </NavItem>
        <NavItem eventKey={2}>
          {
            (isLoggedIn() ? (<Link to="/Criar"> Criar Tarefa </Link>) : (<div></div>))
          }
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={3}>
          {
            (isLoggedIn() ? (<div></div>) : (<Link to="/Cadastro"> Cadastrar </Link>))
          }
        </NavItem>
        <NavItem eventKey={3}>
        {
          (isLoggedIn() ? (<Link to ="/" onClick={() => logout()}> Logout </Link>) : (<Link to="/Login">Login </Link>))
        }
        </NavItem>
      </Nav>
    </Navbar>
    );
  }
}
