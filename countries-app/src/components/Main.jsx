import { useEffect } from "react";
import Container from "./Container";
import { MenuItem, TextField } from "@mui/material";
import Region from "./Region";
import "./main.css"
const Main = () => {
  
  return (
    <div>
      <div className="input-container">
        <TextField></TextField>
       <Region/>
      </div>
      <Container />
    </div>
  );
};

export default Main;
