import React, { useState } from 'react';

import Header from './components/Header';

// Componente
// Propriedade - Info que passo de componente pai para componente filho 
// Estado e Imutabilidade - 

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  //  useState retorna array com 2 posições
  // 1- variavel com o seu valor inicial
  // 2- funçao para att o valor 

  //handle prefixo utilizado para lidar com ação do usuário
  function handleAddProject() {

    // ... para copiar as infos de uma variavel
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    // conceito de fragments
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

    </>
  );
}


export default App;