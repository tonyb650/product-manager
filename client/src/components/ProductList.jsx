import React from 'react'
import { useState, useEffect } from 'react' // ended up not needed 'useState'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function ProductList(props) {
  // Some notes about destructuring 'props'. Props is an object literal with 2 key-value pairs so we destructure it using the object 'keys'.
  // The keys come from the names that are passed from the parent component. i.e.: *productList* in *productList*={productList}
  // so 'props' would look something like { productsList : [...array of products...], setProductsList : function that sets that array}
  const { productsList, setProductsList, removeFromDOM } = props; 
  const navigate = useNavigate();
  
  useEffect(() => { // uses the route set up in Express to retrieve a list of a all products. Once we receive it, we set our productsList array to the response.data
    axios.get("http://localhost:8000/api/products")
    .then(response => {
      setProductsList(response.data)
    } )
    .catch(err => console.log(err))
  },[])

  function handleDelete(id) {    // this handles a click on a "delete" button for a specific product
    // console.log("entered handleDelete")
    // console.log(id)
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(result => {
      // console.log(result);
      // console.log(productsList);
      removeFromDOM(id); // This whole removeFromDom 'lifted' function is not really necessary. The solution files just do the filtering right here. Presumably, calling the setter function will cause the 'return' below to be rendered again.
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => {
            return (
              <tr key={product._id}>
                <td>
                  <Link to={`/products/${product._id}`}>{product.title}</Link>
                </td>
                <td>
                  ${product.price}
                </td>
                <td className='text-center'>
                  <button className='btn border mx-1' onClick={(e) => navigate(`/edit/${product._id}`)}>Update</button>
                  <button className='btn border mx-1' onClick={(e) => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList