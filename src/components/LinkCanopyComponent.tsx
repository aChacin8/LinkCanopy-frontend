import {  NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import NavBar from "./NavBar";
import type { ISocialNetwork, IUser } from "../interfaces";
import ShowLinks from "./ShowLinks";

interface LinkCanopyComponentProps {
    data: IUser
}

const LinkCanopyComponent = ( { data } : LinkCanopyComponentProps) => {
    const [enabledLinks, setEnabledLinks] = useState<ISocialNetwork[]>(JSON.parse(data.links).filter((link : ISocialNetwork) => link.enabled))

    useEffect(() => {
        setEnabledLinks(JSON.parse(data.links).filter((link: ISocialNetwork)=> link.enabled))
    }, [data])

    const handleDragEnd = (e: DragEndEvent) => {
        if (e.over && e.over.id){
            const prevIndex = enabledLinks.findIndex(link => link.id === e.active.id)
            const newIndex = enabledLinks.findIndex(link => link.id === e.over!.id)
            const order = arrayMove(enabledLinks, prevIndex, newIndex)
            
            setEnabledLinks (order)
        }
    }

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

                            <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <div className="mt-20 flex flex-col gap-5">
                                    <SortableContext
                                        items = {enabledLinks}
                                        strategy={verticalListSortingStrategy}

                                    >
                                        {enabledLinks.map(link => (
                                            <ShowLinks key={link.name} link = {link}/>
                                        ))}
                                    </SortableContext>
                                </div>
                            </DndContext>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LinkCanopyComponent
