import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.css';

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [editedProduct, setEditedProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://crud-react-oc6v.onrender.com/PRODUCTS/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProduct({ ...product });
  };

  const handleSave = () => {
    console.log('Saving edited product:', editedProduct);

    axios.put(`https://crud-react-oc6v.onrender.com/PRODUCTS/${productId}`, editedProduct)
      .then(response => {
        console.log('Response from server:', response.data);
        setProduct(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`https://crud-react-oc6v.onrender.com/PRODUCTS/${productId}`)
        .then(response => {
          console.log('Product deleted successfully:', response);
          navigate('/Products');
        })
        .catch(error => {
          console.error('Error deleting product:', error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={product.image} alt={product.title} />
          </div>
          <div className="col-md-6">
            <h5>{product.rating}</h5>
            {isEditing ? (
              <div>
                <label htmlFor="editedTitle">Title:</label>
                <input
                  id="editedTitle"
                  name="title"
                  value={editedProduct.title}
                  onChange={handleInputChange}
                />
                <label htmlFor="editedDescription">Description:</label>
                <textarea
                  id="editedDescription"
                  name="description"
                  value={editedProduct.description}
                  onChange={handleInputChange}
                />
                <label htmlFor="editedPrice">Price:</label>
                <input
                  id="editedPrice"
                  name="price"
                  type="number"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                />
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <h1 className="singleTitle">{product.title}</h1>
                <div className="singlePrice mb-3">
                  <span>{product.price} KSH</span>
                </div>
                <p className="singleDescription">{product.description}</p>
              </div>
            )}
            <button className="singleProductButton btn-lg btn-outline-light" onClick={handleEdit}>EDIT</button>
            <button className="singleProductButton btn-lg btn-outline-light" onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
