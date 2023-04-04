import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import i18next from "i18next";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const StyledAppBar = styled(AppBar)`
  position: relative !important;
  margin-bottom: 10px; /* add this to make the app bar relative */
`;

const Header = ({ testid }) => {
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState("");
  const handleClick = (e) => {
    e.target.id === "add" ? navigate("/AddProduct") : navigate("/");
  };
  const handleChange = (e) => {
    setSearchId(e.target.value);
  };
  const searchById = (e) => {
    if (searchId) {
      const params = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      fetch(`https://reqres.in/api/products/${searchId}`, params)
        .then((res) => res.json())
        .then((res) => {
          if (res && res.data) {
            navigate("/prodcutCard", {
              state: { id: searchId, response: res.data, searchFlag: true },
            });
          } else {
            throw new Error();
          }
        })
        .catch(() => navigate("/ErrorNotFound", { state: { id: searchId } }));
    }
  };
  return (
    <div testid={testid}>
      <StyledAppBar>
        <Toolbar sx={{ backgroundColor: "#004d40" }}>
          <Dropdown></Dropdown>
          <TextField
            variant="outlined"
            margin="normal"
            value={searchId}
            name="name"
            placeholder="Search by id"
            size="small"
            onChange={handleChange}
            sx={{ backgroundColor: "white", borderRadius: 2, marginRight: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <SearchIcon sx={{ cursor: "pointer" }} onClick={searchById} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            id="add"
            size="small"
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="primary"
            onClick={handleClick}
          >
            {i18next.t("Add_Product")}
          </Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};
export default Header;
