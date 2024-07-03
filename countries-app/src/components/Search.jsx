import React, { useEffect, useState } from 'react'
import "./search.css"
const Search = () => {
  const [countryData,setCountryData] = useState(null)
  const [inputData,setInputData] = useState('')

    const fetchData=async() =>{
      const res =await fetch(`https://restcountries.com/v3.1/name/${inputData}`)
      const data = await res.json()
      setCountryData(data)
      console.log(countryData)
      }
      
      

  const hanleClick=(e)=>{
    e.preventDefault()
    
  }
  return (
    <div>
      <form action="submit" onSubmit={hanleClick}>
      <input type="text"className='input-box'  value={inputData} onChange={(e) => setInputData(e.target.value)}  placeholder='Search for a country...'/> 
      <button onClick={fetchData}></button>
      </form>
    </div>
      
  )
}

export default Search