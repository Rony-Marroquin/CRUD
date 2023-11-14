
import React, { useState, useEffect } from 'react';
import Agregar from './Componets/Agregar';
import Lista from './Componets/Lista';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  // Actualiza un nuevo estado

  // PUT
  
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDatos(data));
  }, []);

  return (
    <div>
      <Agregar setDatos={setDatos} />
      <Lista datos={datos} />
    </div>
  );
}

export default App;
