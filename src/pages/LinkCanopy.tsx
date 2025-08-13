import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { social } from "../data/social"
import LinkCanopyInput from "../components/LinkCanopyInput"
import { isValidUrl } from "../utils"
import { updateUser } from "../requests/users"
import type { IUser, ISocialNetwork } from "../interfaces"

const LinkCanopy = () => {
  const [linksCanopy, setLinksCanopy] = useState (social)
  const queryClient = useQueryClient()
  const user : IUser = queryClient.getQueryData(['user'])!

  const updateLinkMutation = useMutation ({
    mutationFn: updateUser,
    onError: (err) => {
      toast.error (err.message)
    },
    onSuccess: (data) => {
      toast.success(data)
    }
  })

  useEffect (()=> {
    const updatedData = linksCanopy.map ( item => {
      const userLink = JSON.parse(user.links).find((link : ISocialNetwork )=> link.name === item.name)
      if (userLink) {
        return { ...item, url: userLink.url, enabled: userLink.enabled}
      }
      return item
    })
    setLinksCanopy(updatedData)
  }, [])

  const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = linksCanopy.map(link => link.name === e.target.name 
                                          ? {...link, url: e.target.value} 
                                          : link
                                        ) 
    
    setLinksCanopy(updatedLink)

    queryClient.setQueryData(['user'], (prevData: IUser) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLink)
      }
    })
  }

  const handleEnableLink = ( socialNetwork : string) => {
    const updatedLink = linksCanopy.map(link => {
                                          if (link.name === socialNetwork){
                                            if (isValidUrl (link.url)){
                                              return {...link, enabled: !link.enabled}
                                            } else {
                                              toast.error ('Invalid URL')
                                            }
                                          }
                                          return link
                                        })
    
    setLinksCanopy(updatedLink)
  
    queryClient.setQueryData(['user'], (prevData: IUser) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLink)
      }
    })
  }
  
  
  return ( 
    <>
      <div className='space-y-3'>
        {linksCanopy.map( link => (
          <LinkCanopyInput 
            key={link.name} 
            link = {link}
            handleUrlChange = { handleUrlChange }
            handleEnableLink={ handleEnableLink}
          />
        ))}
        <button
            type="submit"
            className="p-2 text-lg w-full bg-stone-600 text-white rounded hover:bg-stone-700"
            onClick={() => updateLinkMutation.mutate(user)}
          >
            Save
          </button>
      </div>
    </>
  )
}

export default LinkCanopy
