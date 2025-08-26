import { NavLink, useLocation } from "react-router"

import AdminNavigation from "./nav/AdminNavigation"
import HomeNavigation from "./nav/HomeNavigation"

const Header = () => {
    const location = useLocation()

    return (
        <header className="bg-stone-700 py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="w-full lg:p-0 md:w-1/3">
                <NavLink to={'/'}>
                    <img src="/logo.png" className="w-32"  />
                </NavLink>
                </div>
                <nav className="flex gap-3 justify-center mt-4">
                    {location.pathname === '/' ? <HomeNavigation/> : <AdminNavigation/>}
                </nav>
            </div>
        </header>
    )
}

export default Header
