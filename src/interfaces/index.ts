export interface IUser {
    handle: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string
}

export type RegisterFormData = Pick <IUser, 'handle' | 'firstName' | 'lastName' | 'phone'| 'email'> & {
    password: string, 
    confirm_password: string   
}