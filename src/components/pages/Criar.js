import React, {Component} from 'react';
import API from '../tils/Api';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {getToken} from '../tils/Auth';

export default class Criar extends Component {
  constructor(){
    super();
    this.state = {
      title: '', description: '', conclusion_date: ''
    }

    var config = {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    }

    this.handleChange = (e) => {
      e.persist();
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    this.criarTarefa = () => {
      let task = {title: this.state.title, description: this.state.description, conclusion_date: this.state.conclusion_date, api_token: getToken()};
      console.log(task)
      API.post('tasks', task)
      .then((response) => {
        alert('Tarefa criada com sucesso!');
      })
      .catch((error) => {
        console.log(error.response)
      })
    }
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col md={2} />
          <Col md={8} >
          <FormGroup controlId="title" bsSize="large">
            <ControlLabel>Titulo</ControlLabel>
            <FormControl autoFocus type="text" value={this.state.title} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="description" bsSize="large">
            <ControlLabel>Descricao</ControlLabel>
            <FormControl autoFocus componentClass="textarea" value={this.state.description} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="conclusion_date" bsSize="large">
            <ControlLabel>Data</ControlLabel>
            <FormControl autoFocus type="date" value={this.state.conclusion_date} onChange={this.handleChange}/>
          </FormGroup>
          <td><Button bsStyle="success" onClick={this.criarTarefa}>CRIAR</Button></td>
          </Col>
          <Col md={2} />
        </Row>
      </Grid>
    );
  }
}
