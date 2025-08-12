import {  NavLink, Outlet } from "react-router";

import NavBar from "./NavBar";
import type { IUser } from "../interfaces";

interface LinkCanopyComponentProps {
    data: IUser
}

const LinkCanopyComponent = ( { data } : LinkCanopyComponentProps) => {
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
                            My Profile: /{data.handle}
                        </NavLink>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <div className="flex-1">
                            <Outlet />
                        </div>

                        <aside className="w-full md:w-96 bg-stone-300 px-5 py-10 rounded-xl shadow space-y-6">
                            <p className="text-4xl text-center text-stone-700">{data.handle}</p>
                            {data.img && 
                                <img src= {data.img} alt= 'Image Profile' className="mx-auto max-w-[250px]"/>
                            }
                            <p className="text-1xl text-center text-stone-700">{data.description}</p>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LinkCanopyComponent
