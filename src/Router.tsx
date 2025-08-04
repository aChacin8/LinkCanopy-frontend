import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

const Router = () => {
  return ( 
    <BrowserRouter> 
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>  
          <Route path= 'login' element= {<Login/>}/>
          <Route path= 'register' element= {<SignUp/>}/>
        </Route>
        <Route path='/admin' element = {<AppLayout/>}>
          <Route index={true} element={<Admin/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;  