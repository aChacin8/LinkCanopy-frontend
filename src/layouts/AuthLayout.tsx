import { NavLink, Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <>
            <div className='min-h-screen bg-stone-300'>
                <div className='max-w-xs mx-auto px-5 '>
                    <NavLink to={'/'}>                   
                        <img src='/logo.png' alt='Link Canopy Logo' className="p-11 mb-24" />
                    </NavLink>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AuthLayout;