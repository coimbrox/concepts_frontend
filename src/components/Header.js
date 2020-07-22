import React from 'react';

//faço a desestruturação pois a onde esta title poderia estar o props e declararia no h1 props.title
//Children propiedade criada pelo react que mostra todo o conteudo que a tag recebeu 
export default function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}