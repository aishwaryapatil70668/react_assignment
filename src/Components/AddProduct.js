import { Button, Grid, TextField, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import SuccessDialog from "./SuccessDialog";
import { useForm } from "react-hook-form";
import i18next from 'i18next';

let AddProduct = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const addProduct = async (formData) => {
    const params = {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        year: formData.year,
        color: formData.color,
        pantone_value: formData.value,
      }),
    };
    console.log("api params", params);
    fetch("https://reqres.in/api/products", params)
      .then((res) => res.json())
      .then((res) => setOpen(true));
  };

  const onSubmit = (formData) => {
    console.log(formData);
    addProduct(formData);
  };
  const handleModal = (openModal) => {
    setOpen(openModal);
  };
  const openModal = () => {
    return <SuccessDialog handleModal={handleModal} open={open} />;
  };
  return (
    <div className="main-div" style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="add-form-main">
          <Typography variant="h4">{i18next.t("Add_Product")}</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            label="Color Name"
            type={"text"}
            name="name"
            placeholder="Color Name"
            {...register("name", { required: "Name is required" })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Year"
            type={"number"}
            name="year"
            placeholder="Year"
            {...register("year", { required: "Value is required" })}
            error={Boolean(errors.year)}
            helperText={errors.year?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Color"
            type={"text"}
            name="color"
            placeholder="Color"
            {...register("color", { required: "Color is required" })}
            error={Boolean(errors.color)}
            helperText={errors.color?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Pantone Value"
            type={"text"}
            name="pvalue"
            placeholder="Pantone Value"
            {...register("pvalue", { required: "Pantone Value is required" })}
            error={Boolean(errors.pvalue)}
            helperText={errors.pvalue?.message}
          />
          <Button
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>
        {open ? openModal() : ""}
      </form>
    </div>
  );
};
export default AddProduct;
