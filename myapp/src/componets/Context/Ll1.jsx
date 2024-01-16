import React, { useContext } from 'react'
import { CounterContex } from './MainPage';

const Ll1 = () => {
    const {count,setCount}=useContext(CounterContex);
    const increaseCount=(e)=>{
        setCount(count+1);

    }
    const decreaseCount=()=>{
        setCount(count-1);

    }
  return (
    <div>
        
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={increaseCount}>+</button>
        <p>change from left side will update to right</p>
      
    </div>
  )
}

export default Ll1
