import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";

const Router = () => {
  return ( 
    <BrowserRouter> 
      <Routes>
        <Route element={<AuthLayout />}>  
          <Route path= '/auth/login' element= {<Login/>}/>
          <Route path= '/auth/register' element= {<SignUp/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;  