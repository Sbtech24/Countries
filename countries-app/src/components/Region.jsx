import React from 'react'
import "./region.css"
const Region = () => {
    // const RegionOptions = [
    //     // {
    //     //   id: 0,
    //     //   continent: "Filter by Region",
    //     // },
    //     {
    //       id: 1,
    //       continent: "Africa",
    //     },
    //     {
    //       id: 2,
    //       continent: "America",
    //     },
    //     {
    //       id: 3,
    //       continent: "Asia",
    //     },
    //     {
    //       id: 4,
    //       continent: "Europe",
    //     },
    //     {
    //       id: 5,
    //       continent: "Oceania",
    //     }
    //   ];
  return (
    <div>
        <select name="Filter by Region" id="Region-box">
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
    </div>
  )
}

export default Region