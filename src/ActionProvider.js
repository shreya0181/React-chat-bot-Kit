import Side from "./components/Side/Side";
import config from "./config";
import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

   
     greet= ()=> {
         const message = this.createChatBotMessage("Enter Your Name!..");
         this.addMessageToState(message);
        
    }
    addMessageToState =(message)=>{
        this.setState(prevState=>({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
   

    }
    message =(message)=>{
  
     const returnmess ="hello";
      console.log(message);
     
      return <div><Side message={message} /></div>;
      }
  }
  
  export default ActionProvider;