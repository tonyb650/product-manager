import React from 'react'
import { useEffect } from 'react' 
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton';

function ProductList(props) {
  // Some notes about destructuring 'props'. Props is an object literal with 2 key-value pairs so we destructure it using the object 'keys'.
  // The keys come from the names that are passed from the parent component. i.e.: *productList* in *productList*={productList}
  // so 'props' would look something like { productsList : [...array of products...], setProductsList : function that sets that array}
  const { productsList, setProductsList } = props; 
  const navigate = useNavigate();
  
  useEffect(() => { // uses the route set up in Express to retrieve a list of a all products. Once we receive it, we set our productsList array to the response.data
    axios.get("http://localhost:8000/api/products")
    .then(response => {
      setProductsList(response.data)
    } )
    .catch(err => console.log(err))
  },[])

  function removeDeleted(id) {    // this handles a click on a "delete" button for a specific product. Since this is just one line, we could put it down in props rather than making a separate function, but I'm just leaving it alone for now.
    setProductsList(productsList.filter(product => product._id != id))
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
                  <button className='btn btn-success mx-1' onClick={(e) => navigate(`/edit/${product._id}`)}>Update</button>
                  <DeleteButton id={product._id} onDeleteCallback={() => removeDeleted(product._id)}/>
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