import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

// Maybe don't actually need 'props'? I wonder if best practices is to remove it, or just leave it.
const Main = (props) => {
  const [productsList, setProductsList] = useState([]);

  const createProduct = (product) => {
    axios.post("http://localhost:8000/api/products", product)
      .then((res) => {
        setProductsList([...productsList, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <div className="border shadow pb-3 px-3">
            <h1 className="h3 my-3 fw-normal">Add Product</h1>
            <ProductForm initialTitle={""} initialPrice={""} initialDescription={""} onSubmitCallback={createProduct} buttonTitle={"Add product"}/>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7 border shadow">
          <ProductList productsList={productsList} setProductsList={setProductsList} />
        </div>
      </div>
    </div>
  );
};

export default Main;