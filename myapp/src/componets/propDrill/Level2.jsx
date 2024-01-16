import React from 'react'

const Level2 = ({count,setCount}) => {

    const increaseCount=(e)=>{
        setCount(count+1);

    }
    const decreaseCount=()=>{
        setCount(count-1);

    }
    
    
  return (
    <div>
        <p>lv2</p>
     
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={increaseCount}>+</button>
      
    </div>
  )
}

export default Level2
