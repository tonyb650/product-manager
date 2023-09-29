import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "../components/ProductForm";

function ProductUpdate(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({}); // notice that now we can roll up all the values for the product into a single object, no need for state for each field anymore
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { // Upon first loading, we use the id that was passed through Params to get one product with Axios. The 'product.data' is used to set the state variables
    axios 
      .get(`http://localhost:8000/api/products/${id}`)
      .then((product) => {
        setProduct(product.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = (product) => {
    console.log("entered updateProduct");
    axios
      .patch(`http://localhost:8000/api/products/${id}`, product)
      .then((updatedProduct) => {
        navigate("/products/"); //return back to the 'Main' component
      })
      .catch((err) => console.log(err));
  };

  // For the sake of formatting (and just to try see if it would be easy), I put the <DeleteButton/> inside of the for <ProductForm/> component and passed the needed props from 
  // <ProductUpdate/> through <ProductForm/> and all the way to <DeleteButton/>. <DeleteButton/> is rendered conditionally on whether the 
  // buttonTitle prop is "Add product" or not. That's a little junky, but adequate for the moment. All in all, pretty easy.
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4 border shadow">
          <h1 className="h3 my-3 fw-normal">Update Product</h1>
          {loaded && (
            <>          
              <ProductForm initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} onSubmitCallback={updateProduct} buttonTitle={"Update Product"} id={product._id} onDeleteCallback={() => navigate("/products/")}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;