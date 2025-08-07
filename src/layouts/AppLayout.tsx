import { NavLink, Outlet, useNavigate } from "react-router";
import { Toaster } from "sonner";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../components/NavBar";
import { getUser } from "../requests/users";

const AppLayout = () => {

    const { data, isLoading, isError} = useQuery ({
        queryFn: getUser,
        queryKey: ['user'],
        refetchOnWindowFocus: false,
        retry: 2
    })

    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;

    if (isError) return navigate('/auth/login')
    
    console.log(data);     
    return (
        <>
            <header className="bg-stone-700 py-4 shadow-md">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                    <div className="w-full lg:p-0 md:w-1/3">
                        <img src="/logo.png" className="w-32" />
                    </div>

                    <button
                        onClick={() => { }}
                        className="bg-lime-500 hover:bg-lime-600 transition-colors px-4 py-2 text-sm font-semibold text-stone-900 rounded-lg shadow"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="bg-stone-400 min-h-screen py-10">
                <main className="mx-auto max-w-5xl px-4">
                    <NavBar/>
                    <div className="flex justify-end">
                        <NavLink
                            className="font-bold text-stone-700 hover:underline text-2xl transition-colors"
                            to={''}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Visitar Mi Perfil
                        </NavLink>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1">
                            <Outlet />
                        </div>

                        <aside className="w-full md:w-96 bg-stone-200 px-5 py-10 rounded-xl shadow space-y-6">

                        </aside>
                    </div>
                </main>
            </div>

            <Toaster position="top-right" />
        </>
    );
};

export default AppLayout;
