
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';


// GET
function Lista({ datos, setDatos }) {
 
  const handleDelete = id => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setDatos(datos.filter(item => item.id !== id));
      })
      .catch(error => console.error(`Error: ${error}`));
  };

  return (
    <div className='contenedor' >
      {datos.map(item => (
        <Container  key={item.id}    >
          <Row>
            
            <Col xs={{ order: 1 }} >{item.id}  </Col>
            <Col xs={{ order: 1 }}>{item.name}  </Col>
            <Col xs={{ order: 1 }}>{item.username}</Col>
            <Col xs={{ order: 1 }}>{item.email}</Col>
            <Col xs={{ order: 1 }}>
              <Button  variant="danger" onClick={() => handleDelete(item.id)}>Borrar</Button>
             
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}

export default Lista;
