// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { useNavigate } from 'react-router-dom';
// import './SeekerDashboard.css';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../NavbarModule/Navbar';
// import { Component } from 'react';
// import Icon from '@mdi/react';
// import { mdiAccount } from '@mdi/js';
// import { CIcon, cisAccountLogout } from '@coreui/icons';
// import { freeSet } from '@coreui/icons';
// // import { FaTwitter, FaLogout } from "react-icons/fa";
// // import { CiLogout } from "react-icons/ci";
// import { Link } from 'react-router-dom'
// import *as FaIcons from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faBug, faCartShopping, faUserPlus, faMessage, faTicket } from '@fortawesome/free-solid-svg-icons';



// function Dashboard() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const navigate = useNavigate();
//     const [showButton, setShowButton] = useState(true);
//     // const navbar = {backgroundColor: '#F16E10'};
//     const [showDashboard, setShowDashboard] = useState(false);

//     const [sidebar, setSidebar] = useState(false);

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     // const navigateToSignup = () => {
//     //     navigate('/Signup');
//     // };

//     const showsidebar = () => setSidebar(!sidebar);


//     // const navigateToLogin = () => {
//     //     navigate('/Login');
//     // };

//     // const navigateToNavbar = () => {
//     //     navigate('/Navbar');
//     // };

//     const navigateToMain = () => {
//         navigate('/');
//     };

//     // const navigateToProviderSignupModule = () => {
//     //     navigate('/providersignup');
//     // };

//     // const navigateToProviderLogin = () => {
//     //     navigate('/providerlogin');
//    // };
//     const navigateToProfile = () => {
//         navigate('/profileRegistration');
//     };

//     //   const toggleButton = () => {
//     //     setShowButton(!showButton);
//     //   };

//     // const handleIconClick = (event) => {
//     //     event.preventDefault();
//     //     setShowDashboard(!showDashboard);
//     //     // {showDashboard && <Navbar />}
//     // };

//     // const handleIconClick = () => {
//     //     return(
//     //         <div>
//     //         <nav className="navbar navbar-expand-lg navbar-light">
//     //                 <ul className="navbar-nav d-flex flex-column">
//     //                     <li className="nav-item"><a className="nav-link" href="/Home">Home</a></li>
//     //                     <li className="nav-item"><a className="nav-link" href="#">Wishlist</a></li>
//     //                     <li className="nav-item"><a className="nav-link" href="#">Carts</a></li>
//     //                     <li className="nav-item"><a className="nav-link" href="#">Orders</a></li>
//     //                     <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
//     //                     <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
//     //                 </ul>
//     //             </nav>
//     //         </div>  
//     //     )
//     //   };



//     return (
//         <div>
//             <div className='Dashboard'>
//             <Box sx={{ flexGrow: 1 }}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <div className='NavIcon'>
//                             <IconButton
//                                 // onClick={handleIconClick}
//                                 onClick={showsidebar}
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 sx={{ mr: 2 }}
//                             >
//                                 {/* {showDashboard && <Navbar />} */}
//                                 <MenuIcon />
//                             </IconButton>
//                         </div>
//                         {/* <Button color="inherit" onClick={navigateToNavbar}>Dashboard</Button> */}
//                         {/* <Button onClick={toggleButton} style={{color:"white"}}>Dashboard</Button> */}
//                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                             Dashboard
//                         </Typography>
//                         <div>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 // onClick={handleMenu}
//                                 onClick={navigateToProfile}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             {/* <Button color="inherit" onClick={navigateToProfile}>Profile</Button> */}
//                             {/* <Button variant="contained" color="secondary" onClick={navigateToProviderSignupModule}>
//                                 SignUp
//                             </Button> */}
//                         </div>
//                         <div>
//                             &nbsp;
//                             {/* <Button variant="contained" color="success" onClick={navigateToMain}>
//                                Logout
//                             </Button> */}
//                             <Button color="inherit" onClick={navigateToMain}>Logout</Button>
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </Box>
//             </div>
//             <div>
//                 <nav className={sidebar ? 'nav-menuactive' : 'nav-menu'}>
//                     <ul className='nav-menu-items'>
//                         <li className="nav-item"><a className="nav-link" href="/Home">Home</a></li>
//                         <br/>
//                         <li className="nav-item"><a className="nav-link" href="/applyJob/:id">Apply Job</a></li>
//                         <br/>
//                         <li className="nav-item"><a className="nav-link" href="/viewjob">View Job List</a></li>
//                         <br/>
//                         <li className="nav-item"><a className="nav-link" href="#">Orders</a></li>
//                         <br/>
//                         <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
//                         <br/>
//                         <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
//                     </ul>
//                 </nav>
//             </div>

//             <div>

//             </div>
//         </div>
//     )
// }


// export default Dashboard