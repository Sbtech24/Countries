import React from 'react'
import { useState,useEffect } from 'react'
import './card.css'
const Container = () => {
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
        {country && country.slice(0,11).map((data)=>{
            return(
                <>
                <div className='card'>
                    <img src={data.flags.png} width={220} alt="" />
                    <h4>{data.name.common}</h4>
                    <p>{data.population}</p>
                    <p>{data.region}</p>
                    <p>{data.capital}</p>
                </div>
               
                </>
            )
        })}
    </div>
  )
}

export default Container