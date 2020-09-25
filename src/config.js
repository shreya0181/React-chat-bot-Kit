import { createChatBotMessage } from "react-chatbot-kit";
import Side from "./components/Side/Side";
import React from 'react';
const config = {
  initialMessages: [createChatBotMessage(`Welcome`,{widget: "side"}
  ), 
 
 
],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'purple',
    },
    chatButton: {
      backgroundColor: 'purple',
    },
    
},
customComponents: {
        botAvtar: (props)=><Side {...props} />
    },
    state: {
            users: [],
          },
          widgets: [
            {
              widgetName: "side",
              widgetFunc: (props) => <Side {...props} />,
              mapStateToProps: ["users"],
             
            }],

  
 

}

export default config;