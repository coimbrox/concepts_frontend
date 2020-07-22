import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/lua.jpeg';

import Header from './components/Header';

// Componente
// Propriedade - Info que passo de componente pai para componente filho 
// Estado e Imutabilidade - 

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  //  useState retorna array com 2 posições
  // 1- variavel com o seu valor inicial
  // 2- funçao para att o valor 

  //handle prefixo utilizado para lidar com ação do usuário
  async function handleAddProject() {

    // ... para copiar as infos de uma variavel
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      name: "Coimbrox"
    });

    const project = response.data;

    setProjects([...projects, project]);

  }


  return (
    // conceito de fragments
    <>
      <Header title="Projects" />

      <img src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

    </>
  );
}


export default App;