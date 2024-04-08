
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
// import HomeSeeker from './pages/Home/HomeSeeker';
// import HomeProvider from './pages/Home/HomeProvider';
import Signup from '../src/components/Code/Signup';
import Login from '../src/components/Code/Login';
import ProviderSignup from '../src/components/Code/ProviderSignup';
import ProviderLogin from '../src/components/Code/ProviderLogin';
import HeaderSeeker from './components/Layouts/HeaderSeeker';
import HeaderProvider from './components/Layouts/HeaderProvider';
import ApplyJob from '../src/components/Code/ApplyJob';
import ProfileRegistration from '../src/components/Code/ProfileRegistration';
import ViewJob from '../src/components/Code/ViewJob';
import ViewApplications from '../src/components/Code/ViewApplications';
import PostJob from '../src/components/Code/PostJob';
import UpdateJob from '../src/components/Code/UpdateJob';
import DeleteJob from '../src/components/Code/DeleteJob';
import PdfUpload from '../src/components/Code/FileUpload';
import PdfDownload from '../src/components/Code/FileDownload';
import Cookies from 'js-cookie';
import SearchForm from './components/Code/SearchForm';
import ProviderSearch from '../src/components/Code/ProviderSearch';
import Email from '../src/components/Code/Email'
import Delete from '../src/components/Code/DeleteJob';
import DeleteJobDetails from './components/Code/DeleteJobDetails';
import AdminRouting from './components/Code/AdminRouting';
import UserRouting from './components/Code/UserRouting';

// function App() {
//   return (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/SDashboard" element={<HeaderSeeker/>} />
//       <Route path="/PDashboard" element={<HeaderProvider/>} />
//       <Route path="/seekersignup" element={<Signup/>} />
//       <Route path="/seekerlogin" element={<Login/>} />
//       <Route path="/providersignup" element={<ProviderSignup/>} />
//       <Route path="/providerlogin" element={<ProviderLogin/>} />
//       <Route path="/profile" element={<ProfileRegistration/>} />
//       <Route path="/applyjob/:id" element={<ApplyJob/>} />
//       <Route path="/viewjob" element={<ViewJob/>} />
//       <Route path="/postjob" element={<PostJob/>} />
//       <Route path="/updatejob/:id" element={<UpdateJob/>} />
//       <Route path="/pdfupload" element={<PdfUpload/>} />
//       <Route path="/pdfdownload" element={<PdfDownload/>} />
//       <Route path="/viewapplication" element={<ViewApplications/>} />
//       <Route path="/search" element={<SearchForm/>} />.
//       <Route path="/psearch" element={<ProviderSearch/>} />
//       <Route path="/email" element={<Email/>} />
//       <Route path="/deletejob/:id" element={<DeleteJobDetails/>} />
//       <Route path="/delete/:id" element={<DeleteJob/>} />
//     </Routes>
//   </Router>
//   );
// }

// export default App;













function App() {

  const cookieCheck = Cookies.get("email");
  const adminCheck = Cookies.get("admin");
  if (adminCheck) {
  return (
  <Router>
    <Routes>
     {/* <Route element={<AdminRouting/>}> */}
      <Route path="/PDashboard" element={<HeaderProvider/>} />
      <Route path="/profile" element={<ProfileRegistration/>} />
      <Route path="/applyjob" element={<ApplyJob/>} />
      <Route path="/viewjob" element={<ViewJob/>} />
      <Route path="/postjob" element={<PostJob/>} />
      <Route path="/updatejob/:id" element={<UpdateJob/>} />
      <Route path="/pdfupload" element={<PdfUpload/>} />
      <Route path="/pdfdownload" element={<PdfDownload/>} />
      <Route path="/viewapplication" element={<ViewApplications/>} />
      <Route path="/email" element={<Email/>} />
      <Route path="/deletejob/:id" element={<DeleteJobDetails/>} />
      <Route path="/delete/:id" element={<DeleteJob/>} />
      <Route path="/search" element={<SearchForm/>} />
       <Route path="/psearch" element={<ProviderSearch/>} />
 
     {/* </Route>  
      
     
       <Route element={<UserRouting/>}> */}
       <Route path="/SDashboard" element={<HeaderSeeker/>} />
       <Route path="/profile" element={<ProfileRegistration/>} />
       <Route path="/applyjob/:id" element={<ApplyJob/>} />
       <Route path="/viewjob" element={<ViewJob/>} />
       <Route path="/pdfupload" element={<PdfUpload/>} />
       <Route path="/viewapplication" element={<ViewApplications/>} />
       <Route path="/search" element={<SearchForm/>} />
     
       {/* </Route> */}
       {/* <Route path="/" element={<Home/>} />
     <Route path="/providersignup" element={<ProviderSignup/>} />
      <Route path="/providerlogin" element={<ProviderLogin/>} />
     <Route path="/seekersignup" element={<Signup/>} />
     <Route path="/seekerlogin" element={<Login/>} /> */}
    </Routes>
  </Router>
  );
}
else if (cookieCheck) {
  return (
    <div>
        <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SDashboard" element={<HeaderSeeker/>} />
      {/* <Route path="/PDashboard" element={<HeaderProvider/>} /> */}
      <Route path="/seekersignup" element={<Signup/>} />
      <Route path="/seekerlogin" element={<Login/>} />
      {/* <Route path="/providersignup" element={<ProviderSignup/>} />
      <Route path="/providerlogin" element={<ProviderLogin/>} /> */}
      <Route path="/profile" element={<ProfileRegistration/>} />
      <Route path="/applyjob/:id" element={<ApplyJob/>} />
      <Route path="/viewjob" element={<ViewJob/>} />
      {/* <Route path="/postjob" element={<PostJob/>} />
      <Route path="/deletejob/:id" element={<UpdateJob/>} />
      <Route path="/updatejob/:id" element={<DeleteJob/>} /> */}
      <Route path="/pdfupload" element={<PdfUpload/>} />
      {/* <Route path="/pdfdownload" element={<PdfDownload/>} /> */}
      <Route path="/viewapplication" element={<ViewApplications/>} />
      <Route path="/search" element={<SearchForm/>} />
    </Routes>
  </Router>
    </div>
  )}
  else {
    return (
      <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/seekersignup" element={<Signup/>} />
      <Route path="/seekerlogin" element={<Login/>} />
      <Route path="/providersignup" element={<ProviderSignup/>} />
      <Route path="/providerlogin" element={<ProviderLogin/>} />
        </Routes>
      </Router>
      
      </>
    )}
}
export default App;
