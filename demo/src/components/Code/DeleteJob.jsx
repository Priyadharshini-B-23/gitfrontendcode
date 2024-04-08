




import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
 
function DeleteJob() {
    const { id } = useParams();
    const [users, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:44354/api/ApplicationDetails`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err));
    }, []);
 
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            axios.delete(`https://localhost:44354/api/ApplicationDetails/${id}`)
                .then(res => {
                  setUserDetails(users.filter(user => user.id !== id));
                })
                .catch(err => console.log(err));
        }
    };
 
    return (
        <>
            {/* <h1>List of Restaurants</h1> */}
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded border shadow p-4">
                    {/* <div className="d-flex justify-content-end">
                        <Link to="/restaurantmenu" className="btn btn-sm btn-success">Add +</Link>
                    </div> */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Job ID</th>
                                <th>Job Seeker ID</th>
                                <th>Preferred Location</th>
                                <th>Job Seeker ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.jobID}</td>
                                        <td>{user.jobProviderName}</td>
                                        <td>{user.preferredLocation}</td>
                                        <td>{user.jobSeekerID}</td>
                                      
                                        <td>
                                            
                                            <Link to={`/delete${user.id}`} onClick={() => handleDelete(user.id)} className="btn btn-danger m-1">Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
 
export default DeleteJob;

