import i18next from "i18next";
import { Typography, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const ErrorNotFound = () => {
  const location = useLocation();
  const prodID = location.state.id;

  return (
    <div className="div-error">
      <Typography variant="h1" color="warning">
        {` Product ${prodID} Does Not Exist`}
      </Typography>
    </div>
  );
};

export default ErrorNotFound;
