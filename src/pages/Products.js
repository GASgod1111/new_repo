import React, { useState, useEffect } from 'react'
import "../assets/styles.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const base_URL = "https://crud-react-oc6v.onrender.com/PRODUCTS"// API URL for fetching products

export default function Products() {
    const [products, setProducts] = useState([]) // State to hold the list of products


    useEffect(() => {                            // Fetch products data from the API when the component mounts
        axios.get(base_URL)
            .then(response => setProducts(response.data))
            .catch(error => {                    // Handle any errors if needed
                console.error("Error fetching products:", error);
            });
    }, [])                                       // console.log(products)


    return (                                     // Display the products / Render the component
        <section className="products py-1 mb-3">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8 col-lg-6">
                        <div>
                            <h2 className="catalogueTitle">
                                PRODUCT CATALOGUE
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map((product) => ( 
                        <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <div className="single__product">
                                    <div className="part1">
                                        <img className="img-fluid" src={product.image} alt={product.title} />
                                    </div>
                                    <div className="part2">
                                        <h5 className="product__rating">{product.rating}</h5>
                                        <h3 className="product__title">{product.title}</h3>
                                        <h3 className="product__price">{product.price}/-</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    )
}
