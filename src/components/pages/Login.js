import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel, Grid, Col, Row } from 'react-bootstrap';
import API from '../tils/Api';


export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "", senha: "", isLogged: false, isLoading: false
    }

    this.logarUsuario = event => {
      const usuario = {
        email: this.state.email, password: this.state.senha
      }

      this.setState({
        isLoading: true
      });

      API.post('user/authenticate', usuario)
  		.then((response) => {
        var token = response.data.token;
        sessionStorage.setItem('token', token);
        this.setState({
          isLogged: true,
          isLoading: false
        })
  		})
      .catch(error =>{
        console.log(error.response);
          this.setState({
            isLoading: false
          });
          if (error.response.status === 401) {
            alert('Email ou Senha Invalidos');
          }
          if (error.response.status === 422) {
            alert('Email Invalido');
          }
        })
        event.preventDefault();
    }
  }

  handleChange = event => {
   this.setState({
     [event.target.id]: event.target.value
   });
 }


  render(){
    if(this.state.isLogged){
      return <Redirect to='./' />
    }
    return(
      <Grid className="style">
        <Row>
          <Col sm={3} xs={3} md={3} />
          <Col sm={6} xs={6} md={6} >
            <h1>Login</h1>
            <form onSubmit={this.logarUsuario}>
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
            disabled={this.state.isLoading}
            onClick={!this.state.isLoading ? this.handleChange : null}
            >
            {!this.state.isLoading ? 'Logar' : 'Carregando'}
            </Button>
            </form>
          </Col>
          <Col sm={3} xs={3} md={3} />
        </Row>
      </Grid>
    );
  }
}
