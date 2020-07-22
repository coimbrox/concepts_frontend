import React from 'react';

import Header from './components/Header';

// Componente
// Propriedade - Info que passo de componente pai para componente filho 
// Estado

function App() {
  return (
    // conceito de fragments
    <>
      <Header title="Homepage">
        <ul>
          <li>Home</li>
          <li>Data</li>
        </ul>
      </Header>

      <Header title="Projects">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Exit</li>
        </ul>
      </Header>
    </>
  );
}


export default App;