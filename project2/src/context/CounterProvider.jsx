import React, {useState} from 'react';
import { CounterContext } from './countercntext';

export default function CounterProvider(props) {
   let [count,setCount] = useState(0)

   const increase = () => {
     setCount(count + 1);
   };
  
  
   const decrease = () => {
      setCount(count - 1)
    };
  return (
    <CounterContext.Provider value={{
       count,
       increase,
       decrease,
    }}
    >
       
       {props.children}
       
   </CounterContext.Provider>
  )
}
