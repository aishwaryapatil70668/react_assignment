import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { ProductDataContext } from "../context/Context";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductDataContext);
  const location = useLocation();
  const searchId = location.state;
  const prodID = location.state.id;
  const filterProduct = products.filter((product) => product.id === prodID);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      {searchId.searchFlag ? (
        <div className="product_info" key={searchId.id}>
          <div
            className="product_color"
            style={{ backgroundColor: `${searchId.response.color}` }}
          ></div>
          <div className="product_details">
            <Typography variant="h3">{`Pantone Color ${searchId.response.name} `}</Typography>
            <h3>Color Data: </h3>
            <table style={{ width: "50%" }}>
              <tr className="a-spacing-small">
                <td className="a-span3">
                  <span className="a-text-bold">Pantone Color Name</span>
                </td>
                <td className="a-span9">
                  <span className="a-text-value">{searchId.response.name}</span>
                </td>
              </tr>
              <tr className="a-spacing-small">
                <td className="a-span3">
                  <span className="a-text-bold">Value</span>
                </td>
                <td className="a-span9">
                  <span className="a-text-value">
                    {searchId.response.pantone_value}
                  </span>
                </td>
              </tr>
              <tr className="a-spacing-small">
                <td className="a-span3">
                  <span className="a-text-bold">Year</span>
                </td>
                <td className="a-span9">
                  <span className="a-text-value">{searchId.response.year}</span>
                </td>
              </tr>
              <tr className="a-spacing-small">
                <td className="a-span3">
                  <span className="a-text-bold">Color</span>
                </td>
                <td className="a-span9">
                  <span className="a-text-value">
                    {searchId.response.color}
                  </span>
                </td>
              </tr>
            </table>
            <h3 className="a_text_item"> About this item: </h3>
            <ul>
              <li>{`${searchId.response.color} color name is Pantone ${searchId.response.pantone_value} Tpx ${searchId.response.name} Color | ${searchId.response.color}. `}</li>

              <li>{i18next.t("PMS_Info")}</li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          {filterProduct.map((product) => {
            return (
              <div className="product_info" key={product.id}>
                <div
                  className="product_color"
                  style={{ backgroundColor: `${product.color}` }}
                ></div>
                <div className="product_details">
                  <Typography variant="h3">{`Pantone Color ${product.name} `}</Typography>
                  <h3>Color Data: </h3>
                  <table style={{ width: "50%" }}>
                    <tr className="a-spacing-small">
                      <td className="a-span3">
                        <span className="a-text-bold">Pantone Color Name</span>
                      </td>
                      <td className="a-span9">
                        <span className="a-text-value">{product.name}</span>
                      </td>
                    </tr>
                    <tr className="a-spacing-small">
                      <td className="a-span3">
                        <span className="a-text-bold">Value</span>
                      </td>
                      <td className="a-span9">
                        <span className="a-text-value">
                          {product.pantone_value}
                        </span>
                      </td>
                    </tr>
                    <tr className="a-spacing-small">
                      <td className="a-span3">
                        <span className="a-text-bold">Year</span>
                      </td>
                      <td className="a-span9">
                        <span className="a-text-value">{product.year}</span>
                      </td>
                    </tr>
                    <tr className="a-spacing-small">
                      <td className="a-span3">
                        <span className="a-text-bold">Color</span>
                      </td>
                      <td className="a-span9">
                        <span className="a-text-value">{product.color}</span>
                      </td>
                    </tr>
                  </table>
                  <h3 className="a_text_item"> About this item: </h3>
                  <ul>
                    <li>{`${product.color} color name is Pantone ${
                      product.pantone_value
                    } Tpx ${
                      product.name
                    } Color | ${product.color.toUpperCase()}. `}</li>

                    <li>{i18next.t("PMS_Info")}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </>
      )}
      <Button id="cancel" sx={{margin: 1.5}}variant="contained" color="primary" onClick={handleClick}>
        {i18next.t("back")}
      </Button>
    </div>
  );
};
export default ProductCard;
