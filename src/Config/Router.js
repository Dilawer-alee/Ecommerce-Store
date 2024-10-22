import React, { useEffect, useState } from 'react';
import{
  createBrowserRouter,RouterProvider,useNavigate,Outlet
} from "react-router-dom";
import Dashboard from '../Views/Dashboard';
import Detail from '../Views/Detail';
import Login from '../Views/Login';
import SignUp from '../Views/SignUp';
import AddProduct from '../Views/Addproduct';
import { onAuthStateChanged,auth } from './Firebase';
import Header from "../Component/Header"
// import  Slider from "../Component/Slider";
import Footer from "../Component/Footer"


const DashboardLayout = ({ children }) => (
  <>
    <Header />
    {/* <Slider/> */}
    {children}
    <Footer/>
  </>
);


const router=createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    children:[{
      path:'/',
      element:(
        <DashboardLayout>
      <Dashboard/>
      </DashboardLayout>
      ),
    },
      {
        path:"/Login",
        element:
        <Login/>
        
    },
      // {
      //     path:"dashboard/",
      //     element:<Dashboard/>,
      // },
      {
          path:"detail/:adId",
          element:(
            <DashboardLayout>
            <Detail />
          </DashboardLayout>
        ),
          
      },
      
      {
          path:"SignUp",
          element:<SignUp/>,
      },
      {
        path:"AddProduct/",
        element:(
          <DashboardLayout>
        <AddProduct/>,
        </DashboardLayout>
        ),
    },]
  }
])

function Main (){
  const navigate=useNavigate();
  const [user,setUser] =useState()

useEffect(()=>{
  onAuthStateChanged(auth ,(user) => {
   setUser(user)
  })
},[])
  
useEffect(()=>{
  const {pathname} = window.location
  if(user) {
    console.log('user login',user)
    if(pathname === '/login'){
      navigate('/')
    }
  }else{
    console.log ('user logout')
    if(pathname === '/addProduct'){
      navigate('/login')
    }
  }
},[window.location.pathname,user])

return <div>
  <Outlet/>
</div>

}


export default function Router(){
  return<RouterProvider router={router}/>
}