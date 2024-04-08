



import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import Cookies from "js-cookie";
 import { Button } from "react-bootstrap";
function DeleteJobDetails() {
    const { id } = useParams();
    const [users, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:44354/api/JobDetails`)
            .then(res => setUserDetails(res.data))
            .catch(err => console.log(err));
    }, []);
 
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            // debugger
            axios.delete(`https://localhost:44354/api/JobDetails/${id}`)
                .then(res => {
                  setUserDetails(users.filter(user => user.jobID !== id));
                })
                .catch(err => console.log(err));
        }
    };
 
    return (
        <>
            {/* <h1>List of Restaurants</h1> */}
            <div className="d-flex flex-column  align-items-center backgroundcolorset vh-100">
                <div className="w-100 rounded bg-dark border shadow p-4">
                    {/* <div className="d-flex justify-content-end">
                        <Link to="/restaurantmenu" className="btn btn-sm btn-success">Add +</Link>
                    </div> */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Job ID</th>
                                <th>Job Name</th>
                                <th>Role</th>
                                <th>Comapany Name</th>
                                <th>Company Type</th>
                                <th>Location</th>
                                <th>Description</th>
                                <th>About Company</th>
                                <th>Salary</th>
                                <th>Employee Type</th>
                                {/* <th>Job Provider ID</th> */}
                                <th>Number of vacancies</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users
                                .filter((item=>item.companyName==Cookies.get('jobProviderCompanyName')))
                                .map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.jobID}</td>
                                        <td>{user.jobName}</td>
                                        <td>{user.role}</td>
                                        <td>{user.companyName}</td>
                                        <td>{user.companyType}</td>
                                        <td>{user.location}</td>
                                        <td>{user.description}</td>
                                        <td>{user.aboutCompany}</td>
                                        <td>{user.salary}</td>
                                        <td>{user.employeeType}</td>
                                        {/* <td>{user.jobProviderID}</td> */}
                                        <td>{user.status}</td>
                                        
                                        <td>
                                        {/* <Button  href="/updatejob/${user.jobID}" >Update</Button> */}
                                            <Link to={`/updatejob/${user.jobID}`} className="btn btn-primary m-1">
                                                Update
                                            </Link>
                                            <Link to={`/deletejob/${user.jobID}`} onClick={() => handleDelete(user.jobID)} className="btn btn-danger m-1">Delete</Link>
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
 
export default DeleteJobDetails;

