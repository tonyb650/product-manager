import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [productsList, setProductsList] = useState([]);

  const removeFromDOM = (id) => { // In the solution files, this is handled directly in the child component, no separate function passed down through props 
    setProductsList(productsList.filter((product) => product._id != id));
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <div className="border shadow pb-3 px-3">
            <ProductForm
            productsList={productsList}
            setProductsList={setProductsList}
          />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7 border shadow">
          <ProductList
            productsList={productsList}
            setProductsList={setProductsList}
            removeFromDOM={removeFromDOM}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;