import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { toast } from "sonner";

import type { IUser, ProfileFormData } from "../interfaces";
import { updateUser } from "../requests/users";

const Profile = () => {
  const queryClient = useQueryClient();
  const data : IUser = queryClient.getQueryData(['user'])! 

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {
      handle: data.handle,
      description: data.description,
    } 
  })

  const updateProfileMutation = useMutation ({
    mutationFn: updateUser,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      queryClient.invalidateQueries({queryKey: ['user']})
    }
  })

  const handleProfile = (formData : ProfileFormData) => {
    updateProfileMutation.mutate(formData)
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
            {...register ('description')}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
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
            Upload
          </button>
        </div>
      </form>
    </div>

  )
}

export default Profile
