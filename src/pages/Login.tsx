import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router";

import type { LoginFormData } from "../interfaces";
import api from "../config/axios";
import ErrorMessage from "../components/ErrorMessage";
import { setToken } from "../utils/tokenStorage";


const Login = () => {
    const defaultValues : LoginFormData = {
        email: '',
        password: ''
    }

    const { register, handleSubmit, formState: { errors }} = useForm({defaultValues});
    const navigate = useNavigate();

    const handleLogin = async (loginData : LoginFormData) => {
        try {
            const response = await api.post('/auth/login', loginData);
            if (response.status === 200){
                toast.success('Login succesful');
                setToken(response.data);
                navigate('/app')
            }
        } catch (error) {
            if (isAxiosError(error) && error.message){
                toast.error (`Error: ${error.response?.data.error}`)
            }
        }
    }
    
    return (
        <>
            <div className="w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-stone-700 dark:border-gray-700">
                <form 
                    className="space-y-6" 
                    action="#"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            placeholder="name@mail.com" 
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email format'
                                }
                            })}
                        />
                        { errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input 
                            type="password" 
                            id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            {...register('password', {
                                required: 'Password is required'
                            })} 
                        />
                        { errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}

                    </div>

                    <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <NavLink to={"/auth/register"} className="text-blue-700 hover:underline dark:text-blue-500">Create account</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
