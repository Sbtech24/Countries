import React from 'react'
import { useLoaderData } from 'react-router-dom'
const CardDetails = () => {

    const card = useLoaderData()
  return (
    <div>{card.name}</div>
  )
}
const cardLoader = async ({name})=>{
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()
    return data 
}
export {cardLoader as default,CardDetails}
