import React from "react";
import { useState } from "react";
import DeleteButton from "./DeleteButton";

function ProductForm(props) {
  const { initialTitle, initialPrice, initialDescription, onSubmitCallback, buttonTitle, id, onDeleteCallback } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback({
          title,
          price,
          description
        })
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      
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
        <button type="submit" className="btn btn-success w-50 my-2 me-2">
          {buttonTitle}
        </button>
        { buttonTitle != "Add product" ? <DeleteButton id={id} onDeleteCallback={onDeleteCallback}/> : null}
      </form>
    </>
  );
}

export default ProductForm;
