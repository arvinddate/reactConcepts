import React from 'react'
import Level2 from './Level2'

function Level1({count,setCount}) {
  return (
    <div>
        <p>Level1</p>
        <Level2 count={count} setCount={setCount} />

        
      
    </div>
  )
}

export default Level1
