import i18next from "i18next";
import { Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();
  const prodID = location.state.id;

  return (
    <div className="div-error">
      <Typography variant="h2" color="warning">
        {` Product ${prodID} Does Not Exist`}
      </Typography>
      <Button id="cancel" sx={{margin: 'auto'}}variant="contained" color="primary" onClick={handleClick}>
        {i18next.t("back")}
      </Button>
    </div>
  );
};

export default Error;
