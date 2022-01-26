import React, { useState } from 'react'
import axios from 'axios';
import ProductList from './ProductList';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {

        e.preventDefault();  //prevent default behavior of the submit

        //make a post request to create a new 
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" />
            </form>

            
            <ProductList />
        </div>
    )
}

