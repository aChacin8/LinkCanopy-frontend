import { NavLink, useLocation, useNavigate} from 'react-router'
import { Bookmark, User} from 'lucide-react'

const tabs = [
    { name: 'Links', href: '/admin', icon: Bookmark },
    { name: 'Perfil', href: '/admin/profile', icon: User },
]

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        navigate(e.target.value)
        
    }
    return (
        <nav >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="sm:hidden mb-4">
                    <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                    <select
                        name='tabs'
                        id='tabs'
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 text-black"
                    >
                        {tabs.map(tab => (
                            <option key={tab.name} value={tab.href}>
                                {tab.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="hidden sm:flex h-10 items-center space-x-6">
                    {tabs.map((tab) => {
                        const isActive = location.pathname === tab.href
                        const Icon = tab.icon

                        return (
                            <NavLink
                                key={tab.name}
                                to={tab.href}
                                className={classNames(
                                    isActive
                                        ? 'text-stone-800 border-b-2 border-stone-700'
                                        : 'text-stone-600 hover:text-stone-900 hover:border-stone-300',
                                    'flex items-center space-x-2 px-3 py-2 text-sm font-medium border-b-2 border-transparent transition'
                                )}
                            >
                                <Icon size={20} />
                                <span>{tab.name}</span>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;