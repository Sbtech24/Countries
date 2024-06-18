import React, { useEffect, useState } from 'react'
import { useParams,useLoaderData,Link } from 'react-router-dom'
const CardDetails = () => {
    const {name} = useParams()
    const [countryData,setCountryData] = useState(null)

    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await res.json()
            console.log(data)
            setCountryData(data)
        }
        getData()
        },[name])
        
  return (
    <>
    <Link to='/'><button >Back</button></Link>
    {countryData && countryData.map((data,key)=>{
        return(
            <div className="container">
        <img src={data.flags.png} alt={data.flags.alt} />
        <div className="country-details">
            <h3>{data.name.common}</h3>
            <div className="country-info">
                <div className="left">
                    <p><span>Native Name:</span>{Object.values(data.name.nativeName)[0].official} </p>
                    <p><span>Population:</span>{data.population} </p>
                    <p><span>Region:</span>{data.region} </p>
                    <p><span>Sub Region:</span>{data.subregion} </p>
                    <p><span>Capital:</span>{data.capital} </p>
                </div>

                <div className="right">
                <p><span>Top Level Domain:</span>{data.tld[0]} </p>
                <p><span>Currencies:</span>{Object.values(data.currencies)[0].name} </p>
                <p><span>Languages:</span>{data.languages.eng} </p>
                </div>
            </div>
        </div>
    </div>
        )
    })}
  
    </>
  )
}


export default CardDetails