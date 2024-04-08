

import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./ProviderSignup.module.css";
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
    jobProviderEmailId:"",
    jobProviderPhoneNumber: "",
    jobProviderCompanyName: "",
    jobProviderCompanyType: "",
    jobProviderLocation: "",
    jobProviderConfirmPassword: "",
    jobProviderPassword: "",
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
    if (!values.jobProviderEmailId) {
      error.jobProviderEmailId = "Email ID is required";
    } else if (!regex.test(values.jobProviderEmailId)) {
      error.jobProviderEmailId = "This is not a valid email format!";
    }

    if (!values.jobProviderPhoneNumber) {
      error.jobProviderPhoneNumber = "Phone Number is required";
    } else if (values.jobProviderPhoneNumber.length < 10) {
      error.jobProviderPhoneNumber = "Phonenumber must be 10 characters";
    } else if (values.jobProviderPhoneNumber.length > 10) {
      error.jobProviderPhoneNumber = "Phone Number cannot exceed more than 10 characters";
    }
    
    if (!values.jobProviderCompanyName) {
      error.jobProviderCompanyName = "Company Name is required";
    }

    if (!values.jobProviderCompanyType) {
      error.jobProviderCompanyType = "Company Type is required";
    }

    if (!values.jobProviderLocation) {
      error.jobProviderLocation = "Location is required";
    }

    if (!values.jobProviderPassword) {
      error.jobProviderPassword = "Password is required";
    } else if (values.jobProviderPassword.length < 4) {
      error.jobProviderPassword = "Password must be more than 4 characters";
    } else if (values.jobProviderPassword.length > 14) {
      error.jobProviderPassword = "Password cannot exceed more than 14 characters";
    }

    if (!values.jobProviderConfirmPassword) {
      error.jobProviderConfirmPassword = "Confirm Password is required";
    } else if (values.jobProviderConfirmPassword !== values.jobProviderConfirmPassword) {
      error.jobProviderConfirmPassword = "Confirm password and password should be same";
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
      axios.post("https://localhost:44354/api/JobProviderSignup", user).then((res) => {
       // alert(res.data.message);
        
        console.log(res.data);
        alert("Job Provider Registered Successfully")
        navigate("/providerlogin", { replace: true });
      })
    
    .catch(err=>{
      if(err.response.status===500){
        alert("Already user registered")
      }
    });
  }
  }, [formErrors]);
  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create your account</h1>
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
            name="jobProviderEmailId"
            id="email"
            placeholder="Enter your Email ID"
            onChange={changeHandler}
            value={user.jobProviderEmailId}
          />
          <p className={basestyle.error}>{formErrors.jobProviderEmailId}</p>
          <input
            type="number"
            name="jobProviderPhoneNumber"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            onChange={changeHandler}
            value={user.jobProviderPhoneNumber}
          />
          <p className={basestyle.error}>{formErrors.jobProviderPhoneNumber}</p>
          <input
            type="text"
            name="jobProviderCompanyName"
            id="qualification"
            placeholder="Enter your Company Name"
            onChange={changeHandler}
            value={user.jobProviderCompanyName}
          />
          <p className={basestyle.error}>{formErrors.jobProviderCompanyName}</p>
          
          <input
            type="text"
            name="jobProviderCompanyType"
            id="password"
            placeholder="Enter your companyType"
            onChange={changeHandler}
            value={user.jobProviderCompanyType}
          />
          <p className={basestyle.error}>{formErrors.jobProviderCompanyType}</p>
          <input
            type="text"
            name="jobProviderLocation"
            id="password"
            placeholder="Enter your Location"
            onChange={changeHandler}
            value={user.jobProviderLocation}
          />
          <p className={basestyle.error}>{formErrors.jobProviderLocation}</p>
          <input
            type="password"
            name="jobProviderPassword"
            id="password"
            placeholder="Enter your Password"
            onChange={changeHandler}
            value={user.jobProviderPassword}
          />
          <p className={basestyle.error}>{formErrors.jobProviderPassword}</p>
          <input
            type="password"
            name="jobProviderConfirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.jobProviderConfirmPassword}
          />
          <p className={basestyle.error}>{formErrors.jobProviderConfirmPassword}</p>

          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/providerlogin">Already registered? Login</NavLink>
      </div>
    </>
  );
};
export default Register;
