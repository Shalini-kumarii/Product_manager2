import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductListDetails from './ProductListDeatils';

export default props => {
    console.log(props.productsData);
   
    return (
       
        <div>
      
            {
                (props.productsData) ?
                    props.productsData.map((product, idx) => {
                        return (
                            <div key={product._id}>

                                <Link to={"/products/" + product._id} >{product.title}</Link>

                            </div>

                        )
                    }) :
                    <p> Loading...AllProducts</p>
            }
        </div>
   

    )
}