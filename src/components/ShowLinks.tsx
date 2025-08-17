import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import type { ISocialNetwork } from "../interfaces"

interface IShowLinks {
    link: ISocialNetwork
}

const ShowLinks = ({ link }: IShowLinks) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable ({
        id: link.id
    }) 

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <li 
            ref = { setNodeRef }
            style={ style }
            className="bg-stone-200 px-5 py-2 flex items-center gap-5 rounded-lg"
            {...attributes}
            {...listeners}
        >
            <div
                className="w-12 h-12 bg-cover "
                id="social_icon"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
            >
            </div>
            <a className="capitalize font-bold text-stone-700" href={link.url} >Visit My {link.name}</a>
        </li>
    )
}

export default ShowLinks
