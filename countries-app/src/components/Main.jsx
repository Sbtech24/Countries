import { useEffect } from "react";
import Container from "./Container";
import { MenuItem, TextField } from "@mui/material";
import Region from "./Region";
import "./main.css"
import Search from "./Search";
const Main = () => {
  
  return (
    <div>
      <div className="input-container">
        <Search/>
       <Region/>
      </div>
      <Container />
    </div>
  );
};

export default Main;
