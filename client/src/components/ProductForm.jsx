import React from "react";
import { useState } from "react";
import axios from "axios";

function ProductForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { productsList, setProductsList } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    axios
      .post("http://localhost:8000/api/products", {
        //notice the shorthand syntax for the following fields
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res.data);
        setProductsList([...productsList, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="h3 my-3 fw-normal">Add Product</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success w-50 my-2">
          Add product
        </button>
      </form>
    </>
  );
}

export default ProductForm;
