import React, { useEffect, useState } from 'react'
import "./search.css"
import CardDetails from '../pages/CardDetails'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { searchContext } from './SearchContext'
const Search = () => {
  const {handleClick,fetchData,inputData,search,countryData,setInputData} = useContext(searchContext)
  return (
    <div>
     <>
     {countryData && countryData.map((country)=>{
      return(
        <Link to={`/card/${country.name.common}`} className='card'>
        <div className='card'>
            <img src={country.flags.png} alt="" className='flag'  />
            <div className='country-data'>
            <h4>{country.name.common}</h4>
            <p><span>Population:</span>{country.population}</p>
            <p><span>Region:</span>{country.region}</p>
            <p><span>Capital:</span>{country.capital}</p>
            </div>
        </div>
        </Link>
      )
     })}
     </>
    </div>
      
  )
}

export default Search