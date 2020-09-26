import Side from "./components/Side/Side";
import config from "./config";
import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

   
     greet= ()=> {
         const message = this.createChatBotMessage("Hello Friend");
         this.addMessageToState(message);
        
    }
    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!",
          {
            widget: "javascriptQuiz",
          }
        );
    
        this.addMessageToState(message);
      };
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