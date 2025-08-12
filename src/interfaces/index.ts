export interface IUser {
    handle: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    _id: string,
    description?: string
    img: string
}

export type RegisterFormData = Pick <IUser, 'handle' | 'firstName' | 'lastName' | 'phone'| 'email'> & {
    password: string
    confirm_password: string   
}

export type LoginFormData = Pick <IUser, 'email'> & {
    password: string
};

export type ProfileFormData = Pick <IUser, 'handle' | 'description' >
