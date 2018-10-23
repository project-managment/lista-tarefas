import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Grid, Col, Row } from 'react-bootstrap';
import API from '../tils/Api';


export default class Cadastro extends Component{
  constructor(){
    super();
    this.state = {
      name: "", email: "", senha: ""
    }

    this.cadastroUsuario = event =>{
      const usuario = {
        name: this.state.name, email: this.state.email, password: this.state.senha
      }
      API.post('user/create', usuario)
  		.then((response) => {
        console.log(response.data);
  		})
  		.catch((error) =>{
  		});
      event.preventDefault();
    }
  }

  handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
  }

  render(){
    return(
      <Grid className="style">
        <Row>
          <Col sm={3} xs={3} md={3} />
          <Col sm={6} xs={6} md={6} >
            <h1>Cadastro</h1>
            <form onSubmit={this.cadastroUsuario}>
            <FormGroup controlId="name" bsSize="large">
              <ControlLabel>Nome</ControlLabel>
              <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="senha" bsSize="large">
              <ControlLabel>Senha</ControlLabel>
              <FormControl
              value={this.state.senha}
              onChange={this.handleChange}
              type="password"
              />
            </FormGroup>
            <Button
            type="submit"
            bsStyle="primary"
            >
            Cadastrar
            </Button>
            </form>
          </Col>
          <Col sm={3} xs={3} md={3} />
        </Row>
      </Grid>
    );
  }
}
