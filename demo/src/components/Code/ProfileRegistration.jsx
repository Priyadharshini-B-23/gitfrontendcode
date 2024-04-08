

import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./ProfileRegistration.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [seeker,setSeeker ] = useState({});
  const [user, setUserDetails] = useState({
    jobSeekerRegistrationID: 0,
    firstName: Cookies.get("firstName"),
    lastName: Cookies.get("lastName"),
    emailId: Cookies.get("email"),
    qualification: Cookies.get("qualification"),
    experience: "",
    tenthPercentage: "",
    twelvethPercentage: "",
    cgpa: "",
    phoneNumber: Cookies.get("phoneNumber"),
    skillSet: "",
    location: "",
    resume: "",
    jobSeekerSignUpModel: Cookies.get("jobSeekerSignUpModel")
  });

  useEffect(() => {
    axios
      .post("https://localhost:44354/api/Login/FindEmail", {
        email: Cookies.get("email")
      })
      .then((res) => {
       console.log(res.data);
       Cookies.set("jobSeekerSignUpModel",res.data.jobSeekerID)
       Cookies.set("firstName",res.data.firstName);
       Cookies.set("lastName",res.data.lastName);
       Cookies.set("qualification",res.data.jobSeekerQualification);
       Cookies.set("phoneNumber",res.data.jobSeekerPhoneNumber);
       setSeeker(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value
    });
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.experience) {
      errors.experience = "Experience is required";
    }
    if (!values.tenthPercentage) {
      errors.tenthPercentage = "Tenth Percentage is required";
    }
    if (!values.twelvethPercentage) {
      errors.twelvethPercentage = "Twelveth Percentage is required";
    }
    if (!values.skillSet) {
      errors.skillSet = "SkillSet is required";
    }
    if (!values.location) {
      errors.location = "Location is required";
    }

    return errors;
  };

  const ProfileHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);   
      debugger
      axios
        .post("https://localhost:44354/api/Profile", user)
        .then((res) => {
          debugger
          alert(res.data.message);
          console.log(res.data);
          navigate("/SDashboard", { replace: true });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <div>
            <h1 className={registerstyle.line}>Create your Profile</h1>
          </div>
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
            id="firstnam"
            placeholder="Enter your lastName"
            onChange={changeHandler}
            value={user.lastName}
          />
          <p className={basestyle.error}>{formErrors.lastName}</p>
          <input
            type="email"
            name="emailId"
            id="firstna"
            placeholder="Enter your emailId"
            onChange={changeHandler}
            value={user.emailId}
          />
          <p className={basestyle.error}>{formErrors.emailId}</p>
          <input
            type="text"
            name="qualification"
            id="firstn"
            placeholder="Enter your qualification"
            onChange={changeHandler}
            value={user.qualification}
          />
          <p className={basestyle.error}>{formErrors.qualification}</p>
          <input
            type="number"
            name="experience"
            id="first"
            placeholder="Enter your experience"
            onChange={changeHandler}
            value={user.experience}
          />
          <p className={basestyle.error}>{formErrors.experience}</p>
          <input
            type="number"
            name="tenthPercentage"
            id="firs"
            placeholder="Enter your tenthPercentage"
            onChange={changeHandler}
            value={user.tenthPercentage}
          />
          <p className={basestyle.error}>{formErrors.tenthPercentage}</p>
          <input
            type="number"
            name="twelvethPercentage"
            id="fir"
            placeholder="Enter your twelvethPercentage"
            onChange={changeHandler}
            value={user.twelvethPercentage}
          />
          <p className={basestyle.error}>{formErrors.twelvethPercentage}</p>
          <input
            type="number"
            name="cgpa"
            id="fi"
            placeholder="Enter your cgpa"
            onChange={changeHandler}
            value={user.cgpa}
          />
          <p className={basestyle.error}>{formErrors.cgpa}</p>
          <input
            type="number"
            name="phoneNumber"
            id="phone"
            placeholder="Enter your phoneNumber"
            onChange={changeHandler}
            value={user.phoneNumber}
          />
          <p className={basestyle.error}>{formErrors.phoneNumber}</p>
          <input
            type="text"
            name="skillSet"
            id="skill"
            placeholder="Enter your skillSet"
            onChange={changeHandler}
            value={user.skillSet}
          />
          <p className={basestyle.error}>{formErrors.skillSet}</p>
          <input
            type="text"
            name="location"
            id="loca"
            placeholder="Enter your location"
            onChange={changeHandler}
            value={user.location}
          />
          <p className={basestyle.error}>{formErrors.location}</p>
          <input

            type="text"
            name="resume"
            id="res"
            placeholder="whether you submitted the resume or not"
            onChange={changeHandler}
            value={user.resume}
          />
          <p className={basestyle.error}>{formErrors.resume}</p>
         
          <button className={basestyle.button_common} onClick={ProfileHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

