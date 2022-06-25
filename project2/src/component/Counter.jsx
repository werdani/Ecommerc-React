import React, {useContext, useState} from 'react';
import { CounterContext } from '../context/countercntext';
export default function Counter(props) {
   let {count,increase,decrease} = useContext(CounterContext);
  return (
    <div className='bg-secondary container text-light p-5'>
      <p>Hello in counter </p>
      <p>count is : {count}</p>
      <button className='btn btn-success' onClick={increase}>+</button>
      <button className='btn btn-danger mx-4' onClick={decrease}>-</button>
    </div>
  )
}
