import React,{Component} from 'react'
//import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component {
  render(){
    return (
      <div className="App">
      <Counter/>
      {/* <Message/> */}
      {/*<Greet name="Joker" heroName="Poepcylinder"><p>Heeft ook nog andere content</p></Greet>
      <Greet name="Burryneuker" heroName="Computertje">
      <button>Action</button>
      </Greet> 
      <Greet name ="Cherrypicker" heroName="Houtrot"/>
      <Welcome name="Joker" heroName="Poepcylinder"/> 
      <Welcome name="Burryneuker" heroName="Computertje"/> 
      <Welcome name="Cherrypicker" heroName="Houtrot"/> */}
    </div>
  )};
}

export default App;
