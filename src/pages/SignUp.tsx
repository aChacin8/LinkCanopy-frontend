import { NavLink, useNavigate ,useLocation } from "react-router"
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "sonner";

import type { RegisterFormData } from "../interfaces";
import ErrorMessage from "../components/ErrorMessage";
import api from "../config/axios";

const SignUp = () => {
  const location = useLocation()

  const inicialValues: RegisterFormData = {
    firstName: '',
    lastName: '',
    handle: location.state.handle ||'',
    email: '',
    password: '',
    confirm_password: '',
    phone: ''
  }

  const { register, watch, handleSubmit, formState: { errors } } = useForm({ defaultValues: inicialValues });
  const navigate = useNavigate();

  const handleRegister = async (formData: RegisterFormData) => {
    try {
      const data = await api.post(`/auth/register`, formData)

      if (data.status === 201) {
        toast.success('Event has been created')
        navigate('/auth/login');
      }

    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response?.data.error}`);
      }
    }
  }

  const password = watch('password');

  return (
    <>
      <div className="w-full max-w-xl lg:max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-10 dark:bg-stone-700 dark:border-gray-700">
        <h1 className="text-lg font-bold dark:text-white">Create Account</h1>
        <form
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register('firstName', {
                  required: "First name is required",
                })}
              />
              {errors.firstName && <ErrorMessage>{errors.firstName?.message}</ErrorMessage>}
              <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register('lastName', {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && <ErrorMessage>{errors.lastName?.message}</ErrorMessage>}
              <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last name
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="handle"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register('handle', {
                required: "Handle is required",
              })}
            />
            {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
            <label htmlFor="handle" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group ">
            <input
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register('email', {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register('password', {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                },
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              id="confirm_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register('confirm_password', {
                required: "Password is required",
                validate: (input) => input === password || "Passwords do not match",
              })}
            />
            {errors.confirm_password && <ErrorMessage>{errors.confirm_password.message}</ErrorMessage>}
            <label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm password
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register('phone', {
                pattern: {
                  value: /^\+?[0-9]{8,15}$/, // entre 8 y 15 dígitos, opcionalmente con +
                  message: "Phone number must be digits only, e.g., +525555555555"
                }
              })}
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone number
            </label>
          </div>
          <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Submit
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
            You have an account? <NavLink to={"/auth/login"} className="text-blue-700 hover:underline dark:text-blue-500">Login</NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp
