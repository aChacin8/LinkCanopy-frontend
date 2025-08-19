
const Header = () => {
    return (
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
    )
}

export default Header
