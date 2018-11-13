import React, {Component} from 'react';
import {Table, Grid, Row, Col, Checkbox, Button, Modal, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {getToken} from '../tils/Auth';
import API from '../tils/Api';

export default class Listar extends Component{
  constructor(){
    super();
    this.state = {
      tarefas: [], apagadas: [], feitas: [], showModal: false, titulo: '', descricao: ''
    }

    this.apagarTarefa = evento => {
      evento.persist();
      var tarefas = [...this.state.tarefas];
      var apagadas = [...this.state.apagadas];
      let tarefa = tarefas[evento.target.getAttribute('pos')];
      apagadas.push(tarefa);
      tarefas.splice(evento.target.getAttribute('pos') ,1);
      this.setState({
        tarefas: tarefas,
        apagadas: apagadas
      })
    };

    this.desfazerTarefa = evento => {
      evento.persist();
      var tarefas = [...this.state.tarefas];
      var feitas = [...this.state.feitas];
      let tarefa = feitas[evento.target.getAttribute('pos')];
      tarefas.push(tarefa);
      feitas.splice(evento.target.getAttribute('pos') ,1);
      this.setState({
        tarefas: tarefas,
        feitas: feitas
      })
    }

    this.tarefaFeita = evento => {
      evento.persist();
      var tarefas = [...this.state.tarefas];
      var feitas = [...this.state.feitas];
      let tarefa = tarefas[evento.target.getAttribute('pos')];
      feitas.push(tarefa);
      tarefas.splice(evento.target.getAttribute('pos') ,1);
      this.setState({
        tarefas: tarefas,
        feitas: feitas
      })
    };

    this.restaurarTarefa = evento => {
      evento.persist();
      var tarefas = [...this.state.tarefas];
      var apagadas = [...this.state.apagadas];
      let tarefa = apagadas[evento.target.getAttribute('pos')];
      tarefas.push(tarefa);
      apagadas.splice(evento.target.getAttribute('pos'), 1);
      this.setState({
        tarefas: tarefas,
        apagadas: apagadas
      })
    };

    this.handleModal = evento => {
      var tarefas = [...this.state.tarefas];
      let tarefa = tarefas[evento.target.getAttribute('pos')]
      this.setState({
        showModal: true, titulo: tarefa.title, descricao: tarefa.description
      })
    }

    this.handleHide = evento => {
      this.setState({
        showModal: false
      })
    }

    this.handleChange = evento => {
      evento.persist();
      this.setState({
        [evento.target.id]: evento.target.value
      })
    }
  }

  componentWillMount(){
		API.get('tasks?api_token=' + getToken())
		.then((response) => {
			this.setState({
				tarefas: response.data,
			});
		})
		.catch((error) =>{
		});
	}

  render(){
    return(
     <Grid>
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <h1>TAREFAS</h1>
            <Table striped bordered condensed hover>
            <thead>
             <tr>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th></th>
                <th></th>
                <th></th>
             </tr>
             </thead>
             <tbody>
              {
                this.state.tarefas.map((row, index) => (
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td><Button id={row.id} pos={index} bsStyle="success" onClick={this.tarefaFeita}>FEITA</Button></td>
                    <td><Button id={row.id} pos={index} bsStyle="warning" onClick={this.handleModal}>EDITAR</Button></td>
                    <td><Button id={row.id} pos={index} bsStyle="danger" onClick={this.apagarTarefa}>APAGAR</Button></td>
                  </tr>
                ))
              }
            </tbody>
            </Table>
          </Col>
          <Col md={2}/>
        </Row>

        <Row>
          <Col md={2}/>
          <Col md={8}>
            <h1>FEITAS</h1>
            <Table striped bordered condensed hover>
            <thead>
             <tr>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th></th>
             </tr>
             </thead>
             <tbody>
              {
                this.state.feitas.map((row, index) => (
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td><Button id={row.id} pos={index} bsStyle="success" onClick={this.desfazerTarefa}>DESFAZER</Button></td>
                  </tr>
                ))
              }
            </tbody>
            </Table>
          </Col>
          <Col md={2}/>
        </Row>

        <Row>
          <Col md={2}/>
          <Col md={8}>
            <h1>APAGADAS</h1>
            <Table striped bordered condensed hover>
            <thead>
             <tr>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th></th>
             </tr>
             </thead>
             <tbody>
              {
                this.state.apagadas.map((row, index) => (
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td><Button id={row.id} pos={index} bsStyle="success" onClick={this.restaurarTarefa}>RESTAURAR</Button></td>
                  </tr>
                ))
              }
            </tbody>
            </Table>
          </Col>
          <Col md={2}/>
        </Row>

        <Modal
          show={this.state.showModal}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Titulo</ControlLabel>
              <FormControl id="titulo" onChange={this.handleChange} value={this.state.titulo}></FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Descricao</ControlLabel>
              <FormControl id="descricao" onChange={this.handleChange} value={this.state.descricao}></FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    );
  }
}
