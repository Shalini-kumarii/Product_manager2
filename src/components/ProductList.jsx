import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductListDetails from './ProductListDeatils';


const ProductList = (props) => {
    

    const[products,setProducts] =useState([])


    useEffect(() => {
      axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data)
                setProducts(res.data)}
            )
        .catch(err => console.log(err))
    }, []);



    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/products/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS DELETE!");

                // remove from DOM after delete success
                setProducts(products.filter((product) => product._id !== deleteId))
            })
            .catch(err => console.log(err))
    }



    return (

        <div>
             {
            products ?
            products.map((product, idx) => {
                        return (
                            <div key={product._id}>

                                <p>  <Link to={"/products/" + product._id} >{product.title}</Link></p>
                                {Date(product.createdAt)} <br />
                                <Link to={"/products/update/" + product._id}>edit</Link>
                                <button onClick={() => deleteProduct(product._id)}>delete</button>

                            </div>

                        )
                    }) :
                    <p> Loading...AllProducts</p>
               }
        </div>
    );
};

export default ProductList;