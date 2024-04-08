
//Dashboard for getting the values 

import Cookies from 'js-cookie'; 

import { useNavigate } from "react-router-dom"; 

import axios from "axios"; 

import { useEffect, useState } from "react"; 

import { Link } from "react-router-dom"; 

  

  function ViweJob() { 

  

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

        setValues.email = email; 
        console.log(email); 

        // window.reload(); 
    } 
    
    const logOutFromDashBoard = (event) => { 

        Cookies.remove("email"); 

        // Cookies.remove("password"); 

        // Cookies.remove("UserID"); 

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
                  <div className="col-md-10 ms-sm-auto col-lg-10 px-md-4 justify-content-start"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div> 

                        <div className="d-flex justify-content-around flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-right"> 

                            <h1 className="h2">Find your perfect job</h1> 
                             
                           

                        </div> 
                        
                        {/* <SearchForm/> */}
                        <h1>List of Jobs</h1> 

                        <div> 

                          
                            <table className="table table-striped table-hover justify-content-around"> 

                                <thead className="thead-dark"> 

                                    <tr> 

                                        <th>Job ID</th> 

                                        <th>Job name</th> 

                                        <th>Role</th> 
                                        
                                        <th>Company Name </th> 

                                        <th>Company Type</th> 

                                        <th>Location</th> 

                                        <th>Description</th> 

                                        <th>About Company</th> 

                                        <th>Salary</th> 

                                        <th>employeeType</th> 
                                        
                                        {/* <th>List no</th>  */}

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

                                                {/* <td>{d.jobProviderID}</td>  */}

                                                <td> 

                                                    {/* <Link to={`/read/${d.id}`} className="btn btn-info m-1">Read</Link> */} 

                                                    <Link to={`/applyjob/${d.jobID}`}  className="btn btn-primary m-1">Apply</Link> 

                                                    {/* <button onClick={e => handleDelete(d.vehicleId)} className="btn btn-danger m-1">Apply</button>  */}

                                                </td> 

                                            </tr> 

                                        )) 

                                    } 

                                </tbody> 

                            </table> 

                        </div> 

  

                    </div> 
{/* 
                </div> 

            </div>  */}

        </> 

    ); 

}
export default ViweJob;