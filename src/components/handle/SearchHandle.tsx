import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import slugify from "react-slugify"
import { useMutation } from "@tanstack/react-query"

import ErrorMessage from "../ErrorMessage"
import { getHandle } from "../../requests/users"
import { NavLink } from "react-router"

const SearchHandle = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const searchMutation = useMutation({
        mutationFn: getHandle

    })

    const handle = watch('handle')

    const handleSearch = () => {
        const slug = slugify(handle, {delimiter: '_'})
        searchMutation.mutate(slug)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(handleSearch)}
                className="w-full flex flex-col sm:flex-row items-center gap-3 bg-stone-200 p-4 rounded-2xl shadow-lg border border-stone-300"
            >
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by handle..."
                        value={handle}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:outline-none text-stone-800 placeholder-stone-400"
                        {...register ('handle', {
                            required: 'Username is required',
                        })}
                    />
                </div>
                {errors.handle && (
                    <ErrorMessage>{errors.handle.message}</ErrorMessage>
                )}

                <button
                    type="submit"
                    className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-xl transition transform hover:scale-105 shadow-md"
                >
                    Search
                </button>
            </form>
            <div className="flex-1 p-2 bg-stone-200 w-full mt-1 rounded-lg min-h-[50px] flex flex-col items-center justify-center">
                    {searchMutation.isPending && (
                        <p className="text-stone-500 ">Checking...</p>)
                    }
                    {searchMutation.isError && (
                        <ErrorMessage>
                            {(searchMutation.error as Error).message}
                        </ErrorMessage>
                    )}
                    {searchMutation.data && (
                        <p className="text-green-600">
                            {searchMutation.data} is available! go to 
                                <NavLink to={'/auth/register'} state={{handle: slugify(handle)}} className={'font-bold'}> Register</NavLink>
                        </p>
                    )}
                </div>
        </> 
    )
}

export default SearchHandle
