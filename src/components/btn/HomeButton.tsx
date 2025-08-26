import { NavLink } from "react-router"

const HomeButton = () => {

  return (
    <>
      <NavLink
        to="/auth/login"
        className="px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md 
                  bg-stone-700 text-white 
                  hover:bg-stone-600 hover:shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-stone-400 
                  transition-all duration-200"
      >
        Login
      </NavLink>

      <NavLink
        to="/auth/register"
        className="px-5 py-2.5 text-sm font-semibold rounded-lg shadow-md 
                  bg-stone-500 text-white 
                  hover:bg-stone-600 hover:shadow-lg 
                  focus:outline-none focus:ring-2 focus:ring-stone-300 
                  transition-all duration-200"
      >
        Register
      </NavLink>
    </>
  )
}

export default HomeButton
