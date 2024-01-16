import React, { useState } from 'react'
import Level1 from './Level1';
import OnotherBranch from './OnotherBranch';

const PropDrill = () => {
    const[count,setCount]=useState(0);



    return (
        <div className="App">
            <div >
            <p>Top Level</p>
            <p>{count}</p>
            <Level1 count={count} setCount={setCount} />

            </div>
            <div>
             <OnotherBranch   count={count} />

            </div>
            
            
            




            

        
        </div>
    )
}

export default PropDrill
