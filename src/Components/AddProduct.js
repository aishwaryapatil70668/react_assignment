import { Button, Grid, TextField, Box, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import SuccessDialog from "./SuccessDialog";
import { useForm } from "react-hook-form";
import i18next from "i18next";
import { ProductDataContext } from "../context/Context";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const { products, setProductData } = useContext(ProductDataContext);
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
        pantone_value: formData.pvalue,
      }),
    };
    fetch("https://reqres.in/api/products", params)
      .then((res) => res.json())
      .then((res) => {
        setOpen(true);
        setProductData([...products, { ...res }]);
      });
  };

  const onSubmit = (formData) => {
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
            label="Pantone Color Name"
            type={"text"}
            name="name"
            placeholder="ex. true red"
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
            placeholder="YYYY"
            {...register("year", { required: "Value is required" })}
            error={Boolean(errors.year)}
            helperText={errors.year?.message}
            inputProps={{ maxLength: 4 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="HEX Color Name"
            type={"text"}
            name="color"
            placeholder="ex. #c74375"
            {...register("color", { required: "Color is required" })}
            error={Boolean(errors.color)}
            helperText={errors.color?.message}
            inputProps={{ maxLength: 7 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Pantone Value"
            type={"text"}
            name="pvalue"
            placeholder="ex. 154020"
            {...register("pvalue", { required: "Pantone Value is required" })}
            error={Boolean(errors.pvalue)}
            inputProps={{ maxLength: 7 }}
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
