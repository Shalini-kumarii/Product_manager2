import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, useParams } from 'react-router-dom';
import ProductList from './ProductList';

const ProductListDetails = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    console.log("inside List")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("inside get")
                console.log(res.data.product)
                setProduct(res.data.product)
            }
            )
            .catch(err => console.log(err))
    }, []);
//console.log(props.product.title);

    return (
        <div>



          <p> Title: {product.title}</p>
           <p> Price:{product.price}</p>
           <p> Description{product.description}</p>

        </div>
    );
};

export default ProductListDetails;


