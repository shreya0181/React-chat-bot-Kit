import React from 'react';
import { useEffect, useState } from 'react';
import "./Side.css";
const Side = (props)=>{
   console.log(props);
   
   const [inputV, setInput] = useState('');


  
   useEffect(() => alert(inputV), [inputV]);
   const changeValue = event => setInput(event.target.value);



    return (<div className="Side">
        <div>
        <input value={inputV} onChange={changeValue} />;
               
           <div>
               {inputV}
           </div>
        </div>
    </div>);
}


export default  Side;
