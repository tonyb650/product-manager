import React from 'react'
import axios from 'axios';

function DeleteButton(props) {
    const { id, onDeleteCallback} = props;

    function handleDelete() {    // this handles a click on a "delete" button for a specific product
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(result => {
            onDeleteCallback(); // onDeleteCallback will have various actions depending on which function is passed through props
        })
        .catch(err => console.log("Getting an error on the axios.delete"+err))
      }

  return (
        <button className='btn btn-danger my-2' onClick={(e) => handleDelete()}>Delete</button>
  )
}

export default DeleteButton