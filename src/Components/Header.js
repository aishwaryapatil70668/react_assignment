import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import i18next from "i18next";

const StyledAppBar = styled(AppBar)`
  position: relative !important;
  margin-bottom: 10px; /* add this to make the app bar relative */
`;

const Header = ({ testid }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.target.id === "add" ? navigate("/AddProduct") : navigate("/");
  };
  const hasQueryParam = (url) => {
    console.log(`/${url}`);
    return url.includes(`/${url}`);
  };
  return (
    <div testid={testid}>
      <StyledAppBar>
        <Toolbar sx={{ backgroundColor: "#004d40" }}>
          <Dropdown></Dropdown>
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

          <Button id="cancel" sx={{ color: "white" }} onClick={handleClick}>
            {i18next.t("back")}
          </Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};
export default Header;
