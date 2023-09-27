// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import ProductDetail from "./components/ProductDetail";
import ProductUpdate from "./components/ProductUpdate";
import Index from "./components/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Main />} path="/products/" default />
          <Route element={<ProductDetail />} path="/products/:id" />
          <Route element={<ProductUpdate />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
