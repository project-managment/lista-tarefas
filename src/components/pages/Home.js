import React, {Component} from 'react';
import { Grid,Table, Row, Col} from 'react-bootstrap';

//table
export default class Home extends Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col md={2}/>
          <Col md={8} >
            <h2>Sobre</h2>
          </Col>
          <Col md={2}/>
        </Row>
        <Row>
          <Col md={2}/>
          <Col md={8}>
            <p>
              Este aplicativo foi desenvolvido em sala de aula na disciplina de
              Planejamento e Gerência de Projetos do curso de Tecnologia em
              Análise e Desenvolvimento de Sistemas, como prática de planjemanto
              e gerênciamento ágil de desenvolvimento de aplicativos.
            </p>
          </Col>
          <Col md={2}/>
        </Row>
      </Grid>
    );
  }
}
