import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
function AdminRouting() {
     const adminCheck = Cookies.get("admin");
     
  return (
   adminCheck=="admin"?<>
   <Outlet/>
   </>:
   <>
    <Navigate to="/"/>
   </>
  )
}

export default AdminRouting