import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componenets/Card'

import './App.css';

function App() {
  return (

    <div>
      <h1 className="text-6xl font-bold underline text-center bg-red-500 text-cyan-100">
        TODO APP
      </h1>

      <Card {title="hi"} />
      <Card />
      <Card />

    </div>
  );
}

export default App;
