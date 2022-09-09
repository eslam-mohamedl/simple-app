import React, { Component } from 'react';
import { useSelector , useDispatch } from 'react';
import { increase,decrease  } from './store';

import Header from './component/Header';
const  App = () =>  {
  const globelState = useSelector((state) => state);


   const dispatch = useDispatch();
    return (
      <div className="App">
      <h1>Hello Redux Basic</h1>
       <>
        <span className="counter">Counter: {globelState.counter}</span>
  <div>
    <button  className="btn">increase +</button>
    <button   className="btn">decrease -</button>
  
  </div>
    </>
      
        
    
  
      <div>
        <button className="btn" >show / hide</button>
      </div>
      </div>
    );
  
  
}

export default App;
