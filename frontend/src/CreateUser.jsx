import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser () {
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8084/create',{username,email,password})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return(
        <div className="d-flex vh-100 bg-Primary justify-content-center align-items-center">
            <div className=" w-50 bg-white rounded p-3">
              <form onSubmit={handleSubmit}>
                <h2>Add Users</h2>
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
                <button className="btn btn-success">Submit</button>
                </form>  
            </div>
            
        </div>
    )
}

export default CreateUser;