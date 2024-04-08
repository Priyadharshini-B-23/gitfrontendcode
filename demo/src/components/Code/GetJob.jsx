
//Dashboard for getting the values 

import Cookies from 'js-cookie'; 

import { useNavigate } from "react-router-dom"; 

import axios from "axios"; 

import { useEffect, useState } from "react"; 

import { Link } from "react-router-dom"; 
  

export function GetJob() { 

  

    const [values, setValues] = useState({}) 

    const navigate = useNavigate(); 

    const [data, setData] = useState([]); 

    useEffect(() => { 

        axios.get('https://localhost:44354/api/JobDetails') 

            .then(res => { 

                setData(res.data); 

            }) 

            .catch(err => console.log(err)); 

    }, []) 

  

    const cookieCheck = () => { 

        var email = Cookies.get("email"); 

        // var password = Cookies.get("password"); 

        setValues.email = email; 

        // setValues.password = password; 

       

        console.log(email); 

        // window.reload(); 

    } 

  

    const logOutFromDashBoard = (event) => { 

        Cookies.remove("email"); 

        Cookies.remove("password"); 

        Cookies.remove("UserID"); 

        navigate('/home'); 

        window.location.reload(); 

    }; 

    const handleDelete = (id) => { 

        const confirm = window.confirm("Would you like to delete?"); 

        if (confirm) { 

            axios.delete('http://localhost:3001/users/' + id) 

                .then(res => { 

                    window.location.reload(); 

                }).catch(err => console.log(err)); 

        } 

    }; 

  

    return ( 

        <> 

  

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div> 

                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 

                            <h1 className="h2">Dashboard</h1> 

  

                            <div className="btn-toolbar mb-2 mb-md-0"> 

  

                                <button type="button" className="btn btn-sm btn-outline-danger mr-3" onClick={logOutFromDashBoard}>Logout</button> 

                            </div> 

                        </div> 
                        3

                        <h1>List of Jobs</h1> 

                        <div> 

                            <div className="d-flex justify-content-end "> 

                                <Link to="/postjob" className="btn btn-sm btn-success">Add +</Link> 

                            </div> 

                            <table className="table table-striped"> 

                                <thead> 

                                    <tr> 

                                        <th>Job ID</th> 

                                        <th>Job name</th> 

                                        <th>Role</th> 

                                        <th>Company Type</th> 

                                        <th>Location</th> 

                                        <th>Description</th> 

                                        <th>About Company</th> 

                                        <th>Salary</th> 
                                        <th>employeeType</th> 
                                        <th>jobProviderID</th> 

                                    </tr> 

                                </thead> 

                                <tbody> 

                                    { 

                                        data.map((d, i) => ( 

                                            <tr key={i}> 

                                                <td>{d.jobID}</td> 

                                                <td>{d.jobName}</td> 

                                                <td>{d.role}</td> 

                                                <td>{d.companyName}</td> 

                                                <td>{d.companyType}</td> 

                                                <td>{d.location}</td> 

                                                <td>{d.description}</td> 

                                                <td>{d.aboutCompany}</td> 

                                                <td>{d.salary}</td> 

                                                <td>{d.employeeType}</td> 

                                                <td>{d.jobProviderID}</td> 

                                                <td> 

                                                    {/* <Link to={`/read/${d.id}`} className="btn btn-info m-1">Read</Link> */} 

                                                    <Link to={`/vehicleupdate/${d.vehicleId}`} onClick={Cookies.set('vehicleId', d.vehicleId)} className="btn btn-primary m-1">Edit</Link> 

                                                    <button onClick={e => handleDelete(d.vehicleId)} className="btn btn-danger m-1">Delete</button> 

                                                </td> 

                                            </tr> 

                                        )) 

                                    } 

                                </tbody> 

                            </table> 

                        </div> 

  

                    </main> 
{/* 
                </div> 

            </div>  */}

        </> 

    ); 

}; 