import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { toast } from "sonner";

import type { IUser, ProfileFormData } from "../interfaces";
import { updateUser, uploadImg } from "../requests/users";

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

  const updloadImageMutation = useMutation ({
    mutationFn: uploadImg,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      console.log(data.img);
      queryClient.setQueryData(['user'], (prevData : IUser) => {
        return {
          ...prevData,
          img: data.img
        }
      })
    } 
  })

    const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){      
      updloadImageMutation.mutate(e.target.files[0]);
    }
  }

  const handleProfile = (formData : ProfileFormData) => {
    const user : IUser = queryClient.getQueryData(['user'])!
    user.description = formData.description
    user.handle = formData.handle

    updateProfileMutation.mutate(user)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-stone-300 shadow-md rounded-lg">
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
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            accept="image/*"
            onChange={ handleImg }
          />
          <p></p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-stone-600 text-white rounded hover:bg-stone-700"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  )}

export default Profile;