import React,{useState,useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import axios from "axios";


const Update =(props) => {
    const history =useHistory();

    const{id} =useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    },[])

    const update =(e) =>{
        e.preventDefault();

        const newProduct ={
            title:title,
            price:price,
            description:description

        }

        // POST to the db, with the obj created
        axios.put("http://localhost:8000/api/products/"+id, newProduct)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS writing to the DB!!");
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR!!!");
                console.log(err);
            })
        }

        return(
            <div>
            <h3> Update</h3>
            <form onSubmit={update}>
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
            <p>
            <button>Submit</button>
            </p>
            
            </form>
            </div>
        );

};

export default Update;