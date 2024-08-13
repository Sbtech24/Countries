import { useEffect } from "react";
import Container from "./Container";
import { MenuItem, TextField } from "@mui/material";
import Region from "./Region";
import "./main.css"
import Search from "./Search";
import { useContext } from 'react'
import { searchContext } from './SearchContext'
const Main = () => {
  const{search} = useContext(searchContext)
  return (
    <div>
      <div className="input-container">
        <Search/>
       <Region/>
      </div>
      {!search && <Container />}
      
    </div>
  );
};

export default Main;
