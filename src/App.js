import "./App.css";
import Header from "./components/Header";
import MUIPagination from "./components/MUIPagination";
import ProductList from "./components/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import AddProduct from "./components/AddProduct";
import Error from "./components/Error";
import i18next from "i18next";
import { useEffect, useState, useContext } from "react";
import { ProductDataContext } from "./context/Context";

const App = () => {
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
        <Route exact path="/Error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
