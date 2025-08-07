import { useForm } from "react-hook-form"

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {
    handle: '',
    description: '',
    phone: ''
  } })

  const handleProfile = () => {

  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <form 
        className="space-y-4"
        onSubmit={handleSubmit(handleProfile)}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="Username"
            {...register ('handle', {
              required: 'The username is required',
            })}
          />
          {errors.handle && <p className="text-red-500 text-sm">{errors.handle.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Write a short description about yourself..."
            {...register ('description', {
              
            })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            name="phone"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="Tu teléfono"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>

  )
}

export default Profile
