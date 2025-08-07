    import { isAxiosError } from "axios"
    import api from "../config/axios"
    import type { IUser, ProfileFormData } from "../interfaces/index"

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

    export const updateUser = async (formData : ProfileFormData) => {
        try {
            const response = await api.patch <string> ('/user', formData)
            return response.data
        } catch (error) {
            if (isAxiosError(error) && error.response){
                throw new Error(error.response.data.error)
            }
        }
    }