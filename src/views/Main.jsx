import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [productsData, setProductData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data)
                setProductData(res.data)}
            )
        .catch(err => console.log(err))
    }, []);
    return (
        <div>
           <ProductForm/>
           
           <ProductList productsData = {productsData}/>
        </div>
    )
}