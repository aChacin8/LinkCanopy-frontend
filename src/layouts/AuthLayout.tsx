import { Outlet } from "react-router";
import { Toaster } from "sonner";

const AuthLayout = () => {
    return (
        <>
            <div className='min-h-screen bg-stone-400'>
                <div className='max-w-xs mx-auto px-5 '>
                    <img src= '/logo.png' alt='Link Canopy Link' className="p-11 mb-24"/>
                    <Outlet/>
                </div>
            </div>
            <Toaster richColors/>
        </>
    )
}

export default AuthLayout;