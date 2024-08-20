import { useEffect } from "react";
import Container from "./Container";
import { MenuItem, TextField } from "@mui/material";
import Region from "./Region";
import "./main.css"
import Search from "./Search";
import { useContext } from 'react'
import { searchContext } from './SearchContext'
const Main = () => {
  const {handleClick,fetchData,inputData,search,countryData,setInputData} = useContext(searchContext)
  return (
    <div>
      <div className="input-container">
      <form action="submit" onSubmit={handleClick}>
      <input type="text"className='input-box' value={inputData} onChange={(e) => setInputData(e.target.value)}  placeholder='Search for a country...'/> 
      <button onClick={fetchData}></button>
      </form>
        
       <Region/>
      </div>
      {search && <Search/>}
      {!search && <Container />}
      
    </div>
  );
};

export default Main;
