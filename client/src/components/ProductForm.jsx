import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        axios.post('http://localhost:8000/api/products', {
          title, price, description
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Product</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
            <input type="submit" className='btn btn-primary'/>
        </form>
    </div>
  )
}

export default ProductForm