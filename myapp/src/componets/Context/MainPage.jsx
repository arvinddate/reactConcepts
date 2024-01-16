import React, { createContext, useState } from 'react'
import Left from './Left';
import Right from './Right';

export const CounterContex=createContext(); //we can write it in another file.

const MainPage = () => {
    
    const [count,setCount]=useState(0);

    //We will change state from left level and update it in right side

  return (
    <div>

        <CounterContex.Provider value={{count, setCount}}>
            <Left />
            <Right />
             
        </CounterContex.Provider>


      
    </div>
  )
}

export default MainPage
