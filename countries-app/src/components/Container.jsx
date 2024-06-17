import React from 'react'
import { useState,useEffect } from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Container = ({name}) => {
    const [country,setCountry] = useState(null)

    useEffect(()=>{
        const fetchData=async () =>{
        const res =await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        setCountry(data)
        }
        fetchData()  
    }
    ,[null])
  return (
    <div className='country-card'>
        {country && country.slice(0,16).map((data)=>{
            return(
                <>
                <Link to={`/card/${name}`} className='card'>
                <div >
                    <img src={data.flags.png} alt="" className='flag' />
                    <div className='country-data'>
                    <h4>{data.name.common}</h4>
                    <p><span>Population:</span>{data.population}</p>
                    <p><span>Region:</span>{data.region}</p>
                    <p><span>Capital:</span>{data.capital}</p>
                    </div>
                </div>
                </Link>
                </>
            )
        })}
    </div>
  )
}

export default Container