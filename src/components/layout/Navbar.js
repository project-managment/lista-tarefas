import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
    <NavItem eventKey={1} href="#">
      <Link to="/Listar"> Listar Tarefas </Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/Login">Login </Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/Cadastro">Cadastrar </Link>
    </NavItem>
  </Nav>
</Navbar>
    );
  }
}
