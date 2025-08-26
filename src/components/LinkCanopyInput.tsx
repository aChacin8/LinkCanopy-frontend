import type { LinksCanopy } from "../interfaces"

interface LinkCanopyInputProps {
    link: LinksCanopy
    handleUrlChange: (e : React.ChangeEvent<HTMLInputElement>) => void
    handleEnableLink: (socialNetwork : string) => void
}

const LinkCanopyInput = ({ link, handleUrlChange, handleEnableLink }: LinkCanopyInputProps) => {
    return (
        <div className="bg-stone-200 shadow-sm p-3 flex items-center gap-3 rounded-md">
            <div
                className="w-12 h-12 bg-cover "
                id="social_icon"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
            >
            </div>
            <input
                type="text"
                value={link.url}
                onChange={handleUrlChange}
                name= {link.name}
                className="bg-stone-200 flex-1 border border-stone-100 rounded-lg"
            />
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={link.enabled} onChange={() => handleEnableLink(link.name)}  />
                <div className="w-11 h-6 bg-stone-400 rounded-full peer peer-checked:bg-green-500 
                            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                            after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5
                            after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white">
                </div>
            </label>
        </div>
    )
}

export default LinkCanopyInput
