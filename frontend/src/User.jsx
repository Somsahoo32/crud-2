import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
function User () {

    const[user,setUser]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8084/user');
            setUser(response.data);
          } catch (err) {
            console.error('Error fetching users:', err);
            // Display an error message to the user
          }
        };
      
        fetchData();
      }, []);

      const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:8084/user/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
      }



    return(
        <div className="d-flex vh-100 bg-Primary justify-content-center align-items-center">
            <div className=" w-50 bg-white rounded p-3">
          <Link to= "/create" className="btn btn-success">Add + </Link>
            <table className="table">
                <thead>
                    <tr >
                        <th>id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data,i)=>(
                        <tr key={i}>
                            <td>{data.id}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>
                                <Link to={`update/${data.id}`} className="btn btn-primary">Update</Link>
                                <button className="btn btn-danger ms-2"onClick={e => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            </div> 
        </div>
    )
}

export default User;