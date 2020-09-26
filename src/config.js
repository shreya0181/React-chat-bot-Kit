import { createChatBotMessage } from "react-chatbot-kit";
import Side from "./components/Side/Side";
import React from 'react';
import Quiz from "./components/Quiz/Quiz";

const config = {
  initialMessages: [createChatBotMessage(`What do uou want to learn`, {
    widget: "Side"
  }
  ), 
],
widgets :[
  {
    widgetName: "Side",
    widgetFunc: (props)=><Side {...props}/>

    

  },{
    widgetName: "javascriptQuiz",
    widgetFunc: (props) => <Quiz {...props} />,
    props: {
      questions: [
        {
          question: "What is closure?",
          answer:
            "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
          id: 1,
        },
        {
          question: "Explain prototypal inheritance",
          answer:
            "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
          id: 2,
        },
      ],
    },
  },],
customStyles: {
    botMessageBox: {
      backgroundColor: 'purple',
    },
    chatButton: {
      backgroundColor: 'purple',
    },
    
},

    state: {
            users: [],
          },
         
  
 

}

export default config;