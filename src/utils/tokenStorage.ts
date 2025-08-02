const TOKEN_STORAGE_KEY = 'key-token';

export const setToken = (token: string) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export const removeToken = () =>{
    localStorage.removeItem(TOKEN_STORAGE_KEY);
}