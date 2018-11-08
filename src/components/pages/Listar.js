import React, {Component} from 'react';
import {Table, Grid, Row, Col, Checkbox, Button} from 'react-bootstrap';
import {getToken} from '../tils/Auth';
import API from '../tils/Api';

export default class Listar extends Component{
  constructor(){
    super();
    this.state = {
      tarefas: []
    }

    this.apagarTarefa = evento => {
      evento.persist();
      var array = [...this.state.tarefas];
      array.splice(evento.target.getAttribute('pos') ,1);
      this.setState({
        tarefas: array
      })
    };

    this.tarefaFeita = evento => {
      evento.persist();
      var array = [...this.state.tarefas];
      array.splice(evento.target.getAttribute('pos') ,1);
      this.setState({
        tarefas: array
      })
    };
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
            <Table striped bordered condensed hover>
            <thead>
             <tr>
                <th>ID</th>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th></th>
                <th></th>
             </tr>
             </thead>
             <tbody>
      {
        this.state.tarefas.map((row, index) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.description}</td>
            <td><Button id={row.id} pos={index} bsStyle="success" onClick={this.tarefaFeita}>FEITA</Button></td>
            <td><Button id={row.id} pos={index} bsStyle="danger" onClick={this.apagarTarefa}>APAGAR</Button></td>
          </tr>
        ))
      }
            </tbody>
            </Table>
          </Col>
          <Col md={2}/>
        </Row>
      </Grid>
    );
  }
}
