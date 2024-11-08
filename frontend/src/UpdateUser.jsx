import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function UpdateUser () {


    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword]=useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8084/update/'+id,{username,email,password})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        <div className="d-flex vh-100 bg-Primary justify-content-center align-items-center">
            <div className=" w-50 bg-white rounded p-3">
              <form onSubmit={handleSubmit}>
                <h2>Update Users</h2>
                <div className="mb-2">
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input type="text" placeholder="Enter Username" className="form-control" id="username" 
                    onChange={e =>setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-lable">Email</label>
                    <input type="text" placeholder="Enter Email" className="form-control" id="email" 
                    onChange={e =>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input type="text" placeholder="Enter Password" className="form-control" id="password"
                    onChange={e =>setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Update</button>
                </form>  
            </div>
            
        </div>
    )
}

export default UpdateUser;