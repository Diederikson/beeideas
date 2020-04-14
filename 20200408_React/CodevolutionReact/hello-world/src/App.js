import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Joker" heroName="Poepcylinder"><p>Heeft ook nog andere content</p></Greet>
      <Greet name="Burryneuker" heroName="Computertje">
      <button>Action</button>
      </Greet>
      <Greet name ="Cherrypicker" heroName="Houtrot"/>
      {/*<Welcome/> tis commented out.*/} 
    </div>
  );
}

export default App;
