import React from 'react'
import { MenuItem, TextField } from "@mui/material";
const Region = () => {
    const RegionOptions = [
        // {
        //   id: 0,
        //   continent: "Filter by Region",
        // },
        {
          id: 1,
          continent: "Africa",
        },
        {
          id: 2,
          continent: "America",
        },
        {
          id: 3,
          continent: "Asia",
        },
        {
          id: 4,
          continent: "Europe",
        },
        {
          id: 5,
          continent: "Oceania",
        }
      ];
  return (
    <div>
         <TextField select defaultValue="Filter by region" size="normal">
         {RegionOptions.map((option)=>{
          return(
            <MenuItem key={option.id} value={option.continent}>{option.continent}</MenuItem>
          )
         })}
        </TextField>
    </div>
  )
}

export default Region