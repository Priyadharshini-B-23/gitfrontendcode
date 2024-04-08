// import React, { useState, useEffect } from "react";
// import basestyle from "./Base.module.css";
// import loginstyle from "./Login.module.css";
// import axios from "axios";
// import { useNavigate, NavLink } from "react-router-dom";


// const Login = ({ setUserState }) => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     email: "",
//     password: "",
//   });


//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...user,
//       [name]: value,
//     });
//   };
//   const validateForm = (values) => {
//     const errors ={};

//     const error = {};
//     const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.email) {
//       error.email = "Email is required";
//     } else if (!regex.test(values.email)) {
//       error.email = "Please enter a valid email address";
//     }
//     if (!values.password) {
//       error.password = "Password is required";
//     }
//     return error;
//   };

//   const loginHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validateForm(user));
//     setIsSubmit(true);
//     axios.post("https://localhost:44354/api/Login", user)
//     .then(res=>{
//       if(res.data['emailstatus']==true && res.data['passwordstatus']==true){navigate('/SDashboard')} 
//       else {
//         alert('Invalid credentials...')}
//     })
    
//     // if (!formErrors) {

//     // }
//   };


//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       setFormErrors(validateForm(user));
//       setIsSubmit(true);
//       // axios.post("https://localhost:44354/api/Login", user)
//       // .then(res=>{
//       //   if(res.data['emailstatus']==true && res.data['passwordstatus']==true){navigate('/SDashboard')} 
//       //   else {alert('Invalid credentials...')}
//       // });  
//     }
//   }, [formErrors]);

  
//   return (

//     <div className={loginstyle.login}>
   
//       <form>
//         <h1>Login</h1>

//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter your Email ID"
//           onChange={changeHandler}
//           value={user.email}
//         />

//         <p className={basestyle.error}>{formErrors.email}</p>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter your Password"
//           onChange={changeHandler}
//           value={user.password}
//         />

//         <p className={basestyle.error}>{formErrors.password}</p>

//         <button className={basestyle.button_common} onClick={loginHandler}>
//           Login
//         </button>
        
//       </form>
//       <NavLink to="/seekersignup">Not yet registered? Register Now</NavLink>
//     </div>

//   );
// };
// export default Login;






















import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

const Login = ({ setUserState }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const validateForm = (values) => {
    const errors ={};

    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

axios.post('https://localhost:44354/api/Login/Login', user)
    .then(res => {
        if (res.data["emailstatus"] === true) {
            if (res.data["passwordstatus"] === true) {
                Cookies.set("email", user.email);
                Cookies.set("password", user.password);
                if (res.data["admin"] === true) {
                    alert("Admin Logged in successfully...");
                    Cookies.set("admin", "admin");
                    navigate('/PDashboard');
                    window.location.reload();
                }
                else {
                    alert("User Logged in successfully..");
                    Cookies.set("user", "user");
                    navigate('/SDashboard');
                    window.location.reload();
                }
            }
            else {
                alert("Invalid Credentials");
            }
        }
        else {
            alert("User registered...");
            navigate('/SDashboard');
        }
        console.log(res);
    })
    .catch(err => console.log(err));
}

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     setFormErrors(validateForm(user));
  //     setIsSubmit(true);
  //     // axios.post("https://localhost:44354/api/Login", user)
  //     // .then(res=>{
  //     //   if(res.data['emailstatus']==true && res.data['passwordstatus']==true){navigate('/SDashboard')} 
  //     //   else {alert('Invalid credentials...')}
  //     // });  
  //   }
  // }, [formErrors]);


  
  return (

    <div className={loginstyle.login}>
   
      <form>
        <h1 data-testid="Heading">Login</h1>

        <input
          type="email"
          name="email"
          data-testid="TextBox1"
          id="emailid"
          placeholder="Enter your Email ID"
          onChange={changeHandler}
          value={user.email}
        />

        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          data-testid="TextBox2"
          id="pswd"
          placeholder="Enter your Password"
          onChange={changeHandler}
          value={user.password}
        />

        <p className={basestyle.error}>{formErrors.password}</p>

        <button id="loginbtn" className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
        
      </form>
      <NavLink to="/seekersignup">Not yet registered? Register Now</NavLink>
    </div>

  );
};
export default Login;

