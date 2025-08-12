import { useState } from "react"

import { social } from "../data/social"
import LinkCanopyInput from "../components/LinkCanopyInput"

const LinkCanopy = () => {
  const [linksCanopy, setLinksCanopy] = useState (social)

  const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = linksCanopy.map(link => link.name === e.target.name 
                                          ? {...link, url: e.target.value} 
                                          : link
                                        ) 
    
    setLinksCanopy(updatedLink)
  }

  const handleEnableLink = ( socialNetwork : string) => {
    const updatedLink = linksCanopy.map(link => {
                                          if (link.name === socialNetwork){
                                            return {...link, enabled: !link.enabled}
                                          } else {
                                            return link
                                          }
                                        })
    
    setLinksCanopy(updatedLink)
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
      </div>
    </>
  )
}

export default LinkCanopy
