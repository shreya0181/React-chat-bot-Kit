import Side from "./components/Side/Side.jsx";
import React from 'react';
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
    
      const lowercase = message.toLowerCase();

      if(lowercase.includes("hello"));
      {
        this.actionProvider.greet() ;
        this.actionProvider.message(message) ;
      }
    }
  }
  
  export default MessageParser;
  