import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Agregar({ setDatos }) {
  
  //Hooks
  
  const [isId, setId] = useState('');
  const [isName, setName] = useState('');
  const [isUsername, setUsername] = useState('');
  const [isEmail, setEmail] = useState('');


  // POST
  const agregarItem = () => {
    const nuevoItem = {
      id: isId,
      name: isName,
      username: isUsername,
      email: isEmail,
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoItem),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDatos(prevDatos => [...prevDatos, nuevoItem]);
    });
  };



  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>ID</InputGroup.Text>
      <Form.Control aria-label="First name" type="text" value={isId} onChange={e => setId(e.target.value)} />
      
      <InputGroup.Text>Nombre</InputGroup.Text>
      <Form.Control aria-label="First name" type="text" value={isName} onChange={e => setName(e.target.value)} />
      
      <InputGroup.Text>Usuario</InputGroup.Text>
      <Form.Control aria-label="First name" type="text" value={isUsername} onChange={e => setUsername(e.target.value)} />
      
      <InputGroup.Text>Email</InputGroup.Text>
      <Form.Control aria-label="First name" type="text" value={isEmail} onChange={e => setEmail(e.target.value)} />
      
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={agregarItem}>Agregar</Button>
      </ButtonGroup>
      
    </InputGroup>
  );
}

export default Agregar;
