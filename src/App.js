import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Provider } from 'react-redux'
// import store from './redux/store';


import Side from './components/Side/Side';



const steps= [{
  id:'1',
  message: 'welcome',
  trigger: '2',


},
{
  id:'2',
  message:"Enter Name",
  trigger: '3'
},
{
  id:'3',
 user: true,
 end: true


}

]
class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(newName) {
    this.setState(name => ({ name: [...this.state.name, newName]}));
  };

  render() {
    
 return (
 
    <div className="App">
      <div className="ChatBot">
        <ChatBot config={config} messageParser= {MessageParser} actionProvider={ActionProvider} steps ={steps}/>
   
        </div>
        <div>
          {this.state.name}
        </div>
    </div>
 
 );
  }
}

export default App;
// 