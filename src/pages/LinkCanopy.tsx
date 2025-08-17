import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { social } from "../data/social"
import LinkCanopyInput from "../components/LinkCanopyInput"
import { isValidUrl } from "../utils"
import { updateUser } from "../requests/users"
import type { IUser, ISocialNetwork } from "../interfaces"

const LinkCanopy = () => {
  const [linksCanopy, setLinksCanopy] = useState(social)
  const queryClient = useQueryClient()
  const user: IUser = queryClient.getQueryData(['user'])!

  const updateLinkMutation = useMutation({
    mutationFn: updateUser,
    onError: (err) => {
      toast.error(err.message)
    },
    onSuccess: (data) => {
      toast.success(data)
    }
  })

  //Add links
  useEffect(() => {
    const updatedData = linksCanopy.map(item => {
      const userLink = JSON.parse(user.links).find((link: ISocialNetwork) => link.name === item.name)
      if (userLink) {
        return { ...item, url: userLink.url, enabled: userLink.enabled }
      }
      return item
    })
    setLinksCanopy(updatedData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = linksCanopy.map(link => link.name === e.target.name
      ? { ...link, url: e.target.value }
      : link
    )
    setLinksCanopy(updatedLink)
  }

  //This is the links in DB
  const links: ISocialNetwork[] = JSON.parse(user.links)

  //Function to use links
  const handleEnableLink = (socialNetwork: string) => {

    //Check URL and Enabled activate or deactivate
    const updatedLink = linksCanopy.map(link => {
      if (link.name === socialNetwork) {
        if (isValidUrl(link.url)) {
          return { ...link, enabled: !link.enabled }
        } else {
          toast.error('Invalid URL')
        }
      }
      return link
    })

    setLinksCanopy(updatedLink)

    //This is a filter according to the changes made by the user
    let updatedItems: ISocialNetwork[] = []

    const selectedSocialMedia = updatedLink.find(link => link.name === socialNetwork)
    if (selectedSocialMedia?.enabled) {

      const id = links.filter(link => link.id).length + 1

      if (links.some(link => link.name === socialNetwork)) {
        updatedItems = links.map(link => {
          if (link.name === socialNetwork) {
            return {
              ...link,
              enabled: true,
              id
            }
          } else {
            return link
          }
        })
      } else {
        const newItem = {
          ...selectedSocialMedia,
          id
        }

        updatedItems = [
          ...links,
          newItem
        ]
      }

    } else {
      const updatedIndex = links.findIndex(link => link.name === socialNetwork)
      updatedItems = links.map(link => {
        if (link.name === socialNetwork) {
          return {
            ...link,
            id: 0,
            enabled: false
          }
        } else if (link.id > updatedIndex) {
          return {
            ...link,
            id: link.id - 1
          }
        } else {
          return link
        }
      })
    }

    //Save Links Data
    queryClient.setQueryData(['user'], (prevData: IUser) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedItems)
      }
    })
  }

  return (
    <>
      <div className='space-y-3'>
        {linksCanopy.map(link => (
          <LinkCanopyInput
            key={link.name}
            link={link}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
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
