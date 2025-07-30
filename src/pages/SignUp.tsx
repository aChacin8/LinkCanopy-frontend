import { NavLink } from "react-router"

const SignUp = () => {
  return (
    <>
        <div className="text-white">
            <h1 className="text-4xl">Sign Up page</h1>
            <nav>
                <NavLink to="/auth/login">Login</NavLink>
            </nav>
        </div>
    </>
  );
}

export default SignUp
