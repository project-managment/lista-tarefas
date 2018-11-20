import React, {Component} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export default class Criar extends Component {
  constructor(){
    super();
    this.state = {
      titulo: '', descricao: ''
    }

    this.handleChange = (e) => {
      e.persist();
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    this.criarTarefa = () => {
      this.setState({
        titulo: '',
        descricao: ''
      })
      alert('Tarefa criada com sucesso!');
    }
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col md={2} />
          <Col md={8} >
          <FormGroup controlId="titulo" bsSize="large">
            <ControlLabel>Titulo</ControlLabel>
            <FormControl autoFocus type="text" value={this.state.titulo} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="descricao" bsSize="large">
            <ControlLabel>Descricao</ControlLabel>
            <FormControl autoFocus componentClass="textarea" value={this.state.descricao} onChange={this.handleChange}/>
          </FormGroup>
          <td><Button bsStyle="success" onClick={this.criarTarefa}>CRIAR</Button></td>
          </Col>
          <Col md={2} />
        </Row>
      </Grid>
    );
  }
}
