import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import { useNavigate } from "react-router-dom"


const base_URL = "https://crud-react-oc6v.onrender.com/products" // My base URL for the API

export default function AddProduct() {
  const { register, handleSubmit } = useForm();   // React Hook Form hook for form handling
  const navigate = useNavigate();                 // React Router hook for navigation
  const onSubmit = (data) => {                    // Function to handle form submission
    axios.post(base_URL, {                        // Sends a POST request to the API with the form data just like Fetch
      title: data.title,
      price: data.price,
      rating: data.rating,
      description: data.description,
      image: data.image,
    })
      .then(response => {                         // Navigate to the products page after a successful submission
        navigate("/products")
      })
      .catch(error => {                           // Handles any errors if needed
        console.error("Error submitting form:", error);
      });
  }

  return (                                        // Form for adding a new Product
    <form id="productForm"className="container my-1" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="formTitle">CREATE A NEW PRODUCT!</h1>
      </div>
      <div className="form-group">
        <label htmlFor="title">ITEM NAME:</label>
        <input type="text" id="title" className="form-control" {...register("title", { required: true })} placeholder="Insert item name" />
      </div>
      <div className="form-group">
        <label htmlFor="price">PRICE:</label>
        <input type="text" id="price" className="form-control" {...register("price", { required: true })} placeholder="Insert price (KSH)" />
      </div>
      <div className="form-group">
        <label htmlFor="description">DESCRIPTION:</label>
        <textarea id="description" className="form-control" {...register("description", { required: true })} placeholder="Insert your description" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">IMAGE URL:</label>
        <input type="text" id="image" className="form-control" {...register("image", { required: true })} placeholder="Insert image URL" />
      </div>
      <div className="form-group">
        <label htmlFor="rating">RATING:</label>
        <select id="rating" className="form-control" {...register('rating', { required: true })}>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <button type="submit" className="addProductBtn">ADD PRODUCT!</button>
    </form>
  )
}
