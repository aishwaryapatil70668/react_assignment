import "./App.css";
import Header from "./Components/Header";
import MUIPagination from "./Components/MUIPagination";
import ProductList from "./Components/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductCard from "./Components/ProductCard";
import AddProduct from "./Components/AddProduct";
import i18next from "i18next";
import { useEffect, useState, useContext } from "react";
import { ProductDataContext } from "./Context/Context";

function App() {
  const { language, setlanguage } = useContext(ProductDataContext);

  useEffect(() => {
    setlanguage(localStorage.getItem("langauge"));
    i18next.changeLanguage(localStorage.getItem("langauge"));
  }, [localStorage.getItem("langauge")]);

  return (
    <div className="App">
      <Header testId="header" language={language} />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/prodcutCard" element={<ProductCard />} />
        <Route exact path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
