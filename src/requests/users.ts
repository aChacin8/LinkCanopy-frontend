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

    export const updateUser = async (formData : IUser) => {
        try {
            const response = await api.patch <string> ('/user', formData)
            return response.data
        } catch (error) {
            if (isAxiosError(error) && error.response){
                throw new Error(error.response.data.error)
            }
        }
    }

    export const uploadImg = async (file : File) => {
        const formData = new FormData ()
        formData.append('file', file)
        
        try {
            const response = await api.post ('/user/img', formData)
            return response.data

        } catch (error) {
            if (isAxiosError(error) && error.response){
                throw new Error(error.response.data.error)
            }
        }
    }