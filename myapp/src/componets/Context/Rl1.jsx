import React, { useContext } from 'react'
import { CounterContex } from './MainPage'

const Rl1 = () => {
    const {count}=useContext(CounterContex)
  return (
    <div>
        <p>{count}</p> 
        <p>Updted here from Left</p>
      
    </div>
  )
}

export default Rl1
