import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import slugify from "react-slugify"
import ErrorMessage from "../ErrorMessage"

const SearchHandle = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const handle = watch('handle'

    )
    const handleSearch = () => {
        const slug = slugify(handle, {delimiter: '_'})
        console.log(slug);
        
    }

    return (
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
    )
}

export default SearchHandle
