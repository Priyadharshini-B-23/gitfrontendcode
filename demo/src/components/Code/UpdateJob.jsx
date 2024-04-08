



import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./PostJob.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import {useParams } from "react-router-dom";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
   
    jobName: "",
    role: "",
    companyName:"",
    companyType: "",
    location: "",
    description: "",
    aboutCompany: "",
    salary: "",
    employeeType: "",
    jobProviderID: "",
    status:"",
   
  });

console.log(user)
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.jobName) {
      error.jobName = "Job Name is required";
    }
    if (!values.role) {
      error.role = "Role is required";
    }
    if (!values.companyName) {
      error.companyName = "Company Name is required";
    }
   
    if (!values.companyType) {
      error.companyType = "Company Type is required";
    }
   
    if (!values.location) {
      error.location = "Location is required";
    }
   
    if (!values.description) {
      error.description = "Description is required";
    }
   
    if (!values.aboutCompany) {
      error.aboutCompany = "About Company is required";
    }
   
    if (!values.salary) {
      error.salary = "Salary is required";
    }
   
    if (!values.employeeType) {
      error.employeeType = "Employee Type is required";
    }   
    return error;
  };
  
  const ProfileHandler = (e) => {
    e.preventDefault();
    console.log(user);
    axios.put('https://localhost:44354/api/JobDetails/' + id, user)
        .then(res => {
            console.log(res.data);
            alert('job details updated successfully..');
            navigate('/PDashboard');
        })
        .catch(err => console.log(err));
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    console.log(id);
    axios.get('https://localhost:44354/api/JobDetails/' + id,user)
    .then(res => {
        setUserDetails(res.data)
    })
    .catch(err => console.log(err));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(user);
      // axios.post("https://localhost:44354/api/JobDetails", user).then((res) => {
      //   alert(res.data.message);
      //   console.log(res.data);
      //   navigate("/PDashboard", { replace: true });
      // });
     
    }
  }, [formErrors]);
  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1 className="text-info">Update your Jobs</h1>
          <input
            type="text"
            name="jobName"
            id="firstname"
            placeholder="Enter the job name"
            onChange={changeHandler}
            value={user.jobName}
          />
          <p className={basestyle.error}>{formErrors.jobName}</p>
          <input
            type="text"
            name="role"
            id="lname"
            placeholder="Enter role"
            onChange={changeHandler}
            value={user.role}
          />
          <p className={basestyle.error}>{formErrors.role}</p>
          <input
            type="email"
            name="companyName"
            id="email"
            placeholder="Enter your companyName"
            onChange={changeHandler}
            value={user.companyName}
          />
          <p className={basestyle.error}>{formErrors.companyName}</p>
          <input
            type="text"
            name="companyType"
            id="phoneNumber"
            placeholder="Enter your companyType"
            onChange={changeHandler}
            value={user.companyType}
          />
          <p className={basestyle.error}>{formErrors.companyType}</p>
          <input
            type="text"
            name="location"
            id="qualification"
            placeholder="Enter your location"
            onChange={changeHandler}
            value={user.location}
          />
          <p className={basestyle.error}>{formErrors.location}</p>
          
          <input
            type="text"
            name="description"
            id="pass"
            placeholder="Enter description "
            onChange={changeHandler}
            value={user.description}
          />
          <p className={basestyle.error}>{formErrors.description}</p>
          <input
            type="text"
            name="aboutCompany"
            id="passw"
            placeholder="Enter your aboutCompany"
            onChange={changeHandler}
            value={user.aboutCompany}
          />
          <p className={basestyle.error}>{formErrors.aboutCompany}</p>
          <input
            type="number"
            name="salary"
            id="passwo"
            placeholder="Enter salary"
            onChange={changeHandler}
            value={user.salary}
          />
          <p className={basestyle.error}>{formErrors.salary}</p>
          <input
            type="text"
            name="employeeType"
            id="passwor"
            placeholder="Enter employeeType"
            onChange={changeHandler}
            value={user.employeeType}
          />
          <p className={basestyle.error}>{formErrors.employeeType}</p>
          
           <input
            type="id"
            name="jobProviderID"
            id="confirmPassword"
            placeholder="Enter your id"
            onChange={changeHandler}
            value={user.jobProviderID}
          />
          <p className={basestyle.error}>{formErrors.jobProviderID}</p>
            
          <input
            type="text"
            name="status"
            id="consword"
            placeholder="No of vacancies"
            onChange={changeHandler}
            value={user.status}
          />
          <p className={basestyle.error}>{formErrors.status}</p>

          <button className={basestyle.button_common} onClick={ProfileHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;



