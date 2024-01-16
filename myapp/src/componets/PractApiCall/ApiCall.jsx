import React, { useEffect, useState } from 'react'
const ApiCall = () => {
    const [input,setInput]=useState("");
    const [searchData,setSearchData]=useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const response= await fetch(`https://demo.dataverse.org/api/search?q=${input}`);
            const data = await response.json();
            console.log(data.data.items);
            setSearchData(data.data.items);   
        }
        const timer=setTimeout(()=>{ 
            getData();
        },2000)
        return ()=>clearTimeout(timer);
    },[input])
  return (
    <>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <ul>
            {searchData.map((item)=>(<li>
                {item.name}
            </li>))}
        </ul>
    </>
    
  )
}

export default ApiCall