import React, { useState } from 'react'
import axios from 'axios';
import ProductList from './ProductList';
import { useHistory } from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState([]); 
    const history = useHistory();

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
            .then(res => {console.log(res.data);
            history.push("/")})
            .catch( err => {
                console.log("ERROR!!!");
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = [];       // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
        {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
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
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}

