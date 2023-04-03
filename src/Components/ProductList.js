import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Button
} from "@mui/material";
import { ProductDataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import MUIPagination from "./MUIPagination";
import i18next from "i18next";
import styled from "styled-components";

const StyledCard = styled(Card)``;

const ProductList = () => {
  const { products, setProductData, pageNumber } =
    useContext(ProductDataContext);
  const navigate = useNavigate();
  
  const fetchProducts = async () => {
    const params = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `https://reqres.in/api/products?page=${pageNumber}`,
      params
    );
    const json = await res.json();
    console.log("api data", json.data);
    console.log("context", products);
    if (products.length < 6) {
      setProductData(json.data);
      console.log("contextdd", json.data);
    } else {
      setProductData(json.data);
    }
    // else{
    //   console.log("api data else", json.data);
    //   setProductData(json.data);
    // }
    // fetch(`https://reqres.in/api/products?page=${pageNumber}`, params)
    //   .then((res) => res.json())
    //   .then((res) => { setProductData(res);
    //     // if (res.length === products.length) {
    //     //   setProductData(res);
    //     // } else {
    //     //   console.log("api data", res);
    //     //   setProductData(res);
    //     // }
    //   });
  };
  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  const handleClick = (id) => {
    console.log("routeprops", id);
    navigate("/prodcutCard", { state: { id, searchFlag: false } });
  };
  return (
    <>
      <h1 className="title-heading">{i18next.t("Pantone_Color_Products")}</h1>
      <div className="product_card">
        {products.length &&
          products.map((product) => {
            return (
              <div key={product.id} style={{ width: "500px" }}>
                <StyledCard
                  id={product.id}
                  className="card_area"
                  variant="outlined"
                  sx={{ maxWidth: 300 }}
                  onClick={() => handleClick(product.id)}
                >
                  <CardActionArea>
                    <CardContent>
                      <div
                        style={{ backgroundColor: `${product.color}` }}
                        className="card_color_area"
                      />
                    </CardContent>
                    <CardContent>
                      <Typography variant="h4" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {product.pantone_value}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Button sx={{ paddingLeft: 2 }} size="small">
                    See More
                  </Button>
                </StyledCard>
              </div>
            );
          })}
      </div>
      <div className="pagination-main">
        <MUIPagination />
      </div>
    </>
  );
};
export default ProductList;
