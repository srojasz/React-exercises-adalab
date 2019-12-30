import React from 'react';
import ReactDOM from 'react-dom';
import css from './halfPage.css'


import HalfPage from './HalfPage';

ReactDOM.render(
  <div class="body">
    <HalfPage
      styling="half-page">
      <h1 className="title">Probando props.children</h1>
      <p>Esto es una prueba para ver cómo funciona el paso de props.children</p>
    </HalfPage>
    <HalfPage
      styling="half-page">
      <h1 className="title">Probando props.children 2</h1>
      <p>Seguimos viendo cómo funciona props.children con React</p>
    </HalfPage>
  </div>,
  document.getElementById('root'));


