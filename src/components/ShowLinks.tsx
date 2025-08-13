import type { ISocialNetwork } from "../interfaces"

interface IShowLinks {
    link: ISocialNetwork
}

const ShowLinks = ({ link }: IShowLinks) => {
    return (
        <li className="bg-stone-200 px-5 py-2 flex items-center gap-5 rounded-lg">
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
