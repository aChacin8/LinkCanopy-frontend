import { NavLink } from "react-router";

const Login = () => {
  return (
    <>
        <div className="text-white">
            <h1 className="text-4xl">Login Page</h1>
            <nav>
                <NavLink to="/auth/register">Sign Up</NavLink>
            </nav>
        </div>
    </>
    
  );
};

export default Login;
