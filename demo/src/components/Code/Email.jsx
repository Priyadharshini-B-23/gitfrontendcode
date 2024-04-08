


import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./PostJob.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    date: "",
    time: "",
    location:"",
    recruiter: "",
    contact: "",
    status: "",
    mail: "",
   
  });

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
    if (!values.date) {
      error.date = "Date is required";
    }
    if (!values.time) {
      error.time = "Time is required";
    }
    if (!values.location) {
      error.location = "Location is required";
    }
   
    if (!values.recruiter) {
      error.recruiter = "Recruiter Name is required";
    }
   
    if (!values.contact) {
      error.contact = "Contact is required";
    }
   
    if (!values.status) {
      error.status = "Status is required";
    }
   
    if (!values.employeeType) {
      error.employeeType = "Employee is required";
    }
   
    if (!values.mail) {
      error.mail = "Mail is required";
    }
   
    
  
    return error;
  };
  const ProfileHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("https://localhost:44354/api/Mail/SendingEmail", user).then((res) => {
        debugger
        alert("Email send successfully");
        console.log(res.data);
        navigate("/PDashboard", { replace: true });
      })
      .catch(err=>{
        if(err.response.status===500){
          alert("Already sent the mail")
        }
      }) ;
    }
  }, [formErrors]);
  return (
    <>
    
      <div className={registerstyle.register}>
        <form>
          <h1 className="text-info">Email Service</h1>
          <input
            type="text"
            name="date"
            id="fir"
            placeholder="Enter the Date"
            onChange={changeHandler}
            value={user.date}
          />
          <p className={basestyle.error}>{formErrors.date}</p>
          <input
            type="text"
            name="time"
            id="llname"
            placeholder="Enter Time"
            onChange={changeHandler}
            value={user.time}
          />
          <p className={basestyle.error}>{formErrors.time}</p>
          <input
            type="text"
            name="location"
            id="email"
            placeholder="Enter Location"
            onChange={changeHandler}
            value={user.location}
          />
          <p className={basestyle.error}>{formErrors.location}</p>
          <input
            type="text"
            name="recruiter"
            id="phoneNumber"
            placeholder="Enter recruiter name"
            onChange={changeHandler}
            value={user.recruiter}
          />
          <p className={basestyle.error}>{formErrors.companyType}</p>
          <input
            type="number"
            name="contact"
            id="qualification"
            placeholder="Enter contact"
            onChange={changeHandler}
            value={user.contact}
          />
          <p className={basestyle.error}>{formErrors.contact}</p>
          
          <input
            type="text"
            name="status"
            id="pass"
            placeholder="Enter status "
            onChange={changeHandler}
            value={user.status}
          />
          <p className={basestyle.error}>{formErrors.status}</p>
          {/* <input
            type="text"
            name="employeeType"
            id="passw"
            placeholder="About Employee Type"
            onChange={changeHandler}
            value={user.employeeType}
          />
          <p className={basestyle.error}>{formErrors.employeeType}</p> */}
          <input
            type="email"
            name="mail"
            id="passwo"
            placeholder="Enter mail"
            onChange={changeHandler}
            value={user.mail}
          />
          <p className={basestyle.error}>{formErrors.mail}</p>

          <button className={basestyle.button_common} onClick={ProfileHandler}>
            Send Mail
          </button>
        </form>
        {/* <NavLink to="/SDashboard">Already registered? Login</NavLink> */}
      </div>
    </>
  );
};
export default Register;
