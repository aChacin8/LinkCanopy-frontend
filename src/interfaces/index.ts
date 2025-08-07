export interface IUser {
    handle: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    _id: string
}

export type RegisterFormData = Pick <IUser, 'handle' | 'firstName' | 'lastName' | 'phone'| 'email'> & {
    password: string
    confirm_password: string   
}

export type LoginFormData = Pick <IUser, 'email'> & {
    password: string
};