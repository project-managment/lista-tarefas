import React, {Component} from 'react';
import {Table, Grid, Row, Col, Checkbox} from 'react-bootstrap';
import {getToken} from '../tils/Auth';
import API from '../tils/Api';

export default class Listar extends Component{
  constructor(){
    super();
    this.state = {
      tarefas: []
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
      <Table striped bordered condensed hover>
     <thead>
     <tr>
     <th></th>
     <th>ID</th>
     <th>TÍTULO</th>
     <th>DESCRIÇÃO</th>
     </tr>
     </thead>
     <tbody>
      {
        this.state.tarefas.map((row, index) => (
          <tr>
          <td>  <Checkbox></Checkbox> </td>
          <td>{row.id}</td>
          <td>{row.title}</td>
          <td>{row.description}</td>
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
