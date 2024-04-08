

import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./ApplyJob.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const {id}=useParams();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUserDetails] = useState({
    jobID:id,
    jobProviderName:"",
    preferredLocation:"",
    jobSeekerID:"",
  });

  useEffect(()=>{
    axios.post('https://localhost:44354/api/Login/FindEmail',{
      email:Cookies.get('email')
  })
  .then(res => {
   console.log(res.data);
})
.catch(err => console.log(err));
  },[])

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
    // if (!values.jobProviderName) {
    //   error.jobProviderName = "Job Provider Name is required";
    // }
    if (!values.preferredLocation) {
      error.preferredLocation = "Preferred Location is required";
    }
    return error;
  };

   const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("https://localhost:44354/api/ApplicationDetails", user).then((res) => {
        alert(res.data.message);
        console.log(res.data);
        navigate("/SDashboard", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Apply for job</h1>
          <input
            type="id"
            name="jobID"
            id="first"
            placeholder="Enter job ID"
            onChange={changeHandler}
            value={id}
          />
          <p className={basestyle.error}>{formErrors.jobID}</p>
          <input
            type="text"
            name="jobProviderName"
            id="lname"
            placeholder="job seeker Name"
            onChange={changeHandler}
            value={user.firstName}
          />
          <p className={basestyle.error}>{formErrors.jobProviderName}</p>
          <input
            type="text"
            name="preferredLocation"
            id="email"
            placeholder="Enter preferedlocation"
            onChange={changeHandler}
            value={user.preferredLocation}
          />
          <p className={basestyle.error}>{formErrors.preferredLocation}</p>
        
        
          <button className={basestyle.button_common} onClick={signupHandler}>
            Apply
          </button>

        </form>
    
      </div>
    </>
  );
};
export default Register;
