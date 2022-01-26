import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [productData, setProductData] = useState([]);
    const[load,setload] =useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data)
                setProductData(res.data)
                setload(true);
            }
            )
            .catch(err => console.log(err))
    }, [productData]);
    return (
        <div>
            <ProductForm />
        {
            load ?
            <ProductList productData={productData} />:
            <p>loading..</p>
        }
            
        </div>
    )
}