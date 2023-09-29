import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import ProductUpdate from "./views/ProductUpdate";
import ProductDetail from "./components/ProductDetail";
import Index from "./components/Index";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} index />
          <Route element={<Main />} path="/products/" />
          <Route element={<ProductDetail />} path="/products/:id" />
          <Route element={<ProductUpdate />} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;