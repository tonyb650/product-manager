import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductUpdate(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id)
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => { // Upon first loading, we use the id that was passed through Params to get one product with Axios. The 'product.data' is used to set the state variables
    axios 
      .get(`http://localhost:8000/api/products/${id}`)
      .then((product) => {
        // console.log(product.data);
        setTitle(product.data.title);
        setPrice(product.data.price);
        setDescription(product.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("entered handleUpdate");
    axios
      .patch(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((updatedProduct) => {
        // console.log(updatedProduct);
        navigate("/products/"); //return back to the 'Main' component
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4 border shadow">
          <h1 className="h3 my-3 fw-normal">Update Product</h1>
          <form onSubmit={handleUpdate}>
            <div className="form-outline mb-2">
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <label className="form-label" htmlFor="title">
                Product
              </label>
            </div>
            <div className="form-outline mb-2">
              <input
                className="form-control"
                type="number"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <label className="form-label" htmlFor="price">
                Price
              </label>
            </div>
            <div className="form-outline mb-2">
              <input
                className="form-control"
                type="text"
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <label className="form-label" htmlFor="description">
                Description
              </label>
            </div>
            <button type="submit" className="btn btn-success w-75 my-2">
              Update and return
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductUpdate;
