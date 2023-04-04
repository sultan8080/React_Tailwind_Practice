import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'

import './App.css';
import Data from './data.json';
import { data } from 'autoprefixer';

// const todoTitle = "Call Family";
// const todoDes = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora eum doloremque soluta, aut numquam quibusdam corrupti temporibus non molestias iste? Cum a consequatur perferendis libero iusto. Voluptas, consequuntur neque?";

function App() {
  console.log(Data[0].desc)

  // let items = [];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<Card title={Data[x].title} descText={Data[x].desc} />)
  // }

  const items = Data.map((item, index) => <Card key={index} title={item.title} descText={item.desc} />);
  return (


    <div>
      <h1 className="font-bold text-3xl text-center bg-sky-950 text-cyan-100 py-5">ToDO APP
      </h1>
      <div className='grid grid-col-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5 mx-24'>
        {items}
      </div>
    </div>
  );
}

export default App;
