import { InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import i18next from "i18next";
import { ProductDataContext } from "../Context/Context";

const Dropdown = () => {
  const { language, setlanguage } = useContext(ProductDataContext);
  const handleChange = (event) => {
    localStorage.setItem("langauge", event.target.value);
    i18next.changeLanguage(event.target.value);
    setlanguage(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 140, color:'white' }} size="small">
        <InputLabel sx={{ color:'white' }} size= "normal" id="demo-select-small">Select Langauge</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={language}
          onChange={handleChange}
          label="Langauge"
          sx={{ color:'white' }} 
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default Dropdown;
