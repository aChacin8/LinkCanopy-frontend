    import { isAxiosError } from "axios"
    import api from "../config/axios"
    import type { IUser } from "../interfaces/index"

    export const getUser = async () => {
        try {
            const response = await api.get <IUser> ('/user')

            return response.data
        } catch (error) {
            if (isAxiosError(error) && error.response){
                throw new Error(error.response.data.error)
            }
        }

    }