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
            className="px-6 py-3 bg-stone-700 hover:bg-stone-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
        >
            Logout
        </button>
    )
}

export default LogoutButton
