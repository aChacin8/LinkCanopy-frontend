import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"

import { removeToken } from "../../utils/tokenStorage"


const LogoutButton = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const logout = () => {
        queryClient.invalidateQueries({queryKey: ['user']})
        removeToken()
        navigate('/auth/login')
    }
    return (
        <button
            onClick={logout}
            className="bg-lime-500 hover:bg-lime-600 transition-colors px-4 py-2 text-sm font-semibold text-stone-900 rounded-lg shadow"
        >
            Logout
        </button>
    )
}

export default LogoutButton
