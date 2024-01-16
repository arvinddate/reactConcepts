import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ApiCallWithDbounce = () => {
    const [input , setInput]=useState("");
    const [searchData,setSearchData]=useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://demo.dataverse.org/api/search?q=${input}`);

                // Assuming setSearchData is a state updater function
                setSearchData(response.data.data.items);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        const timer = setTimeout(() => {
            getData();
        }, 2000);
    
        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    
    }, [input, setSearchData]);  // Add setSearchData as a dependency if it's defined outside the component
    





  return (
    <div>
        <input onChange={(e)=>{setInput(e.target.value)}} placeholder='Search...' />
        <ul>
            {
                searchData?.map((item)=>(
                    <li>
                        {item.name}

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ApiCallWithDbounce

