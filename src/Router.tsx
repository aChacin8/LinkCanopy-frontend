import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import LinkCanopy from "./pages/LinkCanopy";
import Profile from "./pages/Profile";
import Handle from "./pages/Handle";
import NotFound404 from "./pages/NotFound404";
import Home from "./pages/Home";


const Router = () => {
  return ( 
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/auth' element={<AuthLayout />}>  
          <Route path= 'login' element= {<Login/>}/>
          <Route path= 'register' element= {<SignUp/>}/>
        </Route>
        
        <Route path='/app' element = {<AppLayout/>}>
          <Route index={true} element={<LinkCanopy/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
        
        <Route path= '/:handle' element={<AuthLayout />}>  
          <Route index={true} element= {<Handle/>}/>
        </Route>

        <Route path= '/error/404' element={<AuthLayout />}>  
          <Route index={true} element= {<NotFound404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;  