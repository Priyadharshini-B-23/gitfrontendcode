
import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./Signup.module.css";
import axios from "axios";
import Cookies from "js-cookie";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    jobSeekerEmailId:"",
    jobSeekerPhoneNumber: "",
    jobSeekerQualification: "",
    jobSeekerPassword: "",
    jobSeekerConfirmPassword: "",
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
    if (!values.firstName) {
      error.firstName = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Name is required";
    }
    // if (!values.lname) {
    //   error.lname = "Last Name is required";
    // }
    if (!values.jobSeekerEmailId) {
      error.jobSeekerEmailId = "Email ID is required";
    } else if (!regex.test(values.jobSeekerEmailId)) {
      error.jobSeekerEmailId = "This is not a valid email format!";
    }

    if (!values.jobSeekerPhoneNumber) {
      error.jobSeekerPhoneNumber = "Phone Number is required";
    } else if (values.jobSeekerPhoneNumber.length < 10) {
      error.jobSeekerPhoneNumber = "Phonenumber must be 10 characters";
    } else if (values.jobSeekerPhoneNumber.length > 10) {
      error.jobSeekerPhoneNumber = "Phone Number cannot exceed more than 10 characters";
    }

    if (!values.jobSeekerQualification) {
      error.jobSeekerQualification = "Qualification is required";
    }

    if (!values.jobSeekerPassword) {
      error.jobSeekerPassword = "Password is required";
    } else if (values.jobSeekerPassword.length < 4) {
      error.jobSeekerPassword = "Password must be more than 4 characters";
    } else if (values.jobSeekerPassword.length > 14) {
      error.jobSeekerPassword = "Password cannot exceed more than 14 characters";
    }

    if (!values.jobSeekerConfirmPassword) {
      error.jobSeekerConfirmPassword = "Confirm Password is required";
    } else if (values.jobSeekerConfirmPassword !== values.jobSeekerConfirmPassword) {
      error.jobSeekerConfirmPassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("https://localhost:44354/api/JobSeekerSignup", user).then((res) => {
        alert("Job Seeker Registered Successfully");
        console.log(res.data);
        navigate("/seekerlogin", { replace: true });
      })
      .catch(err=>{
        if(err.response.status===500){
          alert("Already user registered")
        }
      }) ;
    }
  }, [formErrors]);


  return (
    <>
    {/* <div className={registerstyle.head}>
      <h2>Profile</h2>
    </div> */}
    <div className={registerstyle.container}>
      <div className={registerstyle.register}>
        <form>
          <h1 className={registerstyle.head} >Create your account</h1>
          <input
            type="text"
            name="firstName"
            id="firstname"
            placeholder="Enter your Name"
            onChange={changeHandler}
            value={user.firstName}
          />
          <p className={basestyle.error}>{formErrors.firstName}</p>
          <input
            type="text"
            name="lastName"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lastName}
          />
          <p className={basestyle.error}>{formErrors.lastName}</p>
          <input
            type="email"
            name="jobSeekerEmailId"
            id="email"
            placeholder="Enter your Email ID"
            onChange={changeHandler}
            value={user.jobSeekerEmailId}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerEmailId}</p>
          <input
            type="number"
            name="jobSeekerPhoneNumber"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            onChange={changeHandler}
            value={user.jobSeekerPhoneNumber}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerPhoneNumber}</p>
          <input
            type="text"
            name="jobSeekerQualification"
            id="qualification"
            placeholder="Enter your Qualifiction"
            onChange={changeHandler}
            value={user.jobSeekerQualification}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerQualification}</p>
          <input
            type="password"
            name="jobSeekerPassword"
            id="password"
            placeholder="Enter your Password"
            onChange={changeHandler}
            value={user.jobSeekerPassword}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerPassword}</p>
          
          <input
            type="password"
            name="jobSeekerConfirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.jobSeekerConfirmPassword}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerConfirmPassword}</p>

          <button id="btn" className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/seekerlogin">Already registered? Login</NavLink>
      </div>
      </div>
    </>
  );
  }
export default Register;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import basestyle from './Base.module.css';
// import registerstyle from './Signup.module.css';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     firstName: '',
//     lastName: '',
//     jobSeekerEmailId: '',
//     jobSeekerPhoneNumber: '',
//     jobSeekerQualification: '',
//     jobSeekerPassword: '',
//     jobSeekerConfirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...user,
//       [name]: value
//     });
//   };

//   const validateForm = () => {
//     const errors = {};
//     const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (!user.firstName) {
//       errors.firstName = 'Name is required';
//     }
//     if (!user.lastName) {
//       errors.lastName = 'Name is required';
//     }
//     if (!user.jobSeekerEmailId) {
//       errors.jobSeekerEmailId = 'Email ID is required';
//     } else if (!regex.test(user.jobSeekerEmailId)) {
//       errors.jobSeekerEmailId = 'This is not a valid email format!';
//     }
//     if (!user.jobSeekerPhoneNumber) {
//       errors.jobSeekerPhoneNumber = 'Phone Number is required';
//     } else if (user.jobSeekerPhoneNumber.length !== 10) {
//       errors.jobSeekerPhoneNumber = 'Phone number must be 10 characters';
//     }
//     if (!user.jobSeekerQualification) {
//       errors.jobSeekerQualification = 'Qualification is required';
//     }
//     if (!user.jobSeekerPassword) {
//       errors.jobSeekerPassword = 'Password is required';
//     } else if (user.jobSeekerPassword.length < 4 || user.jobSeekerPassword.length > 14) {
//       errors.jobSeekerPassword = 'Password must be between 4 and 14 characters';
//     }
//     if (!user.jobSeekerConfirmPassword) {
//       errors.jobSeekerConfirmPassword = 'Confirm Password is required';
//     } else if (user.jobSeekerConfirmPassword !== user.jobSeekerPassword) {
//       errors.jobSeekerConfirmPassword = 'Confirm password and password should be same';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmit(true);

//     if (validateForm()) {
//       try {
//         const response = await axios.post('https://localhost:44354/api/JobSeekerSignup', user);
//         console.log(response.data);
//         // Store user details in cookies
//         Cookies.set('firstName', user.firstName);
//         Cookies.set('lastName', user.lastName);
//         Cookies.set('jobSeekerEmailId', user.jobSeekerEmailId);
//         Cookies.set('jobSeekerPhoneNumber', user.jobSeekerPhoneNumber);
//         Cookies.set('jobSeekerQualification', user.jobSeekerQualification);
//         // Navigate to the next page
//         navigate('/registration-details');
//       } catch (error) {
//         console.error('Sign-up failed:', error);
//       }
//     }
//   };

//   return (
//     <div className={registerstyle.container}>
//       <div className={registerstyle.register}>
//         <form onSubmit={handleSubmit}>
//           <h1 className={registerstyle.head}>Create your account</h1>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter your Name"
//             value={user.firstName}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.firstName && <p className={basestyle.error}>{formErrors.firstName}</p>}
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={user.lastName}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.lastName && <p className={basestyle.error}>{formErrors.lastName}</p>}
//           <input
//             type="email"
//             name="jobSeekerEmailId"
//             placeholder="Email id"
//             value={user.jobSeekerEmailId}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.jobSeekerEmailId && <p className={basestyle.error}>{formErrors.jobSeekerEmailId}</p>}
//           <input
//             type="number"
//             name="jobSeekerPhoneNumber"
//             placeholder="Phone Number"
//             value={user.jobSeekerPhoneNumber}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.jobSeekerPhoneNumber && <p className={basestyle.error}>{formErrors.jobSeekerPhoneNumber}</p>}
//           <input
//             type="text"
//             name="jobSeekerQualification"
//             placeholder="Qualification"
//             value={user.jobSeekerQualification}
//             onChange={handleChange}
            
//           />
//           {isSubmit && formErrors.jobSeekerQualification && <p className={basestyle.error}>{formErrors.jobSeekerQualification}</p>}
//           <input
//             type="password"
//             name="jobSeekerPassword"
//             placeholder="Password"
//             value={user.jobSeekerPassword}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.jobSeekerPassword && <p className={basestyle.error}>{formErrors.jobSeekerPassword}</p>}
//           <input
//             type="password"
//             name="jobSeekerConfirmPassword"
//             placeholder="Confirm Password"
//             value={user.jobSeekerConfirmPassword}
//             onChange={handleChange}
//           />
//           {isSubmit && formErrors.jobSeekerConfirmPassword && <p className={basestyle.error}>{formErrors.jobSeekerConfirmPassword}</p>}
         
//           <button className={basestyle.button_common} type="submit">Register</button>
//         </form>
//         <NavLink to="/seekerlogin">Already registered? Login</NavLink>
//       </div>
//     </div>
//   );
// };

// export default Register;
