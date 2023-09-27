import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail(props) {
  // Notes about useParams: Params is a hook that contains the value(s) passed along from the parent component (in this case App.jsx)
  // as part of the path. Just like 'props', it is passed along as an object where the key is the "changeable" part of the path (i.e.:
  // the part after the colon ). So when we destructure useParams, we are destructuring an object that looks like { id : "the_key_string_here"}

  const { id } = useParams();
  const [product, setProduct] = useState({});
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`) // using backticks in this way is call 'string interpolation'
      .then((product) => {
        // console.log("success");
        // console.log(product.data);
        // console.log(product.data.price.toLocaleString("en-US"));
        setProduct(product.data);
      })
      .catch((err) => console.log(err));
  }, []); // [] here is a 'dependency array'. In the solutions video, it was pointed out that we could make React happy by changing from an empty array to [id] 

  return (
    <div className="container">
      <div className="row">
        <div className="card shadow mt-4 col-5">
          <img
            src="https://picsum.photos/200/100"
            className="card-img-top mt-3"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description}
              <br />${product.price}
            </p>
            <a href="/products/" className="btn btn-primary">
              Return To Product List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
