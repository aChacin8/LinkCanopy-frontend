import type { ISocialNetwork, UserHandle } from "../../interfaces"

type HandleComponentProps = {
    data: UserHandle
}

const HandleComponent = ({ data }: HandleComponentProps) => {
    const links: ISocialNetwork[] = JSON.parse(data.links).filter(
        (link: ISocialNetwork) => link.enabled
    )

    return (
        <div className="flex items-center justify-center bg-stone-300 px-2 w-full">
            <div className="bg-stone-200 rounded-2xl shadow-lg p-8 max-w-md w-full text-center">

                {data.img ? (
                    <img
                        src={data.img}
                        alt={data.handle}
                        className="w-28 h-28 mx-auto rounded-full border-4 border-stone-500 shadow-md"
                    />
                ) : (
                    <div className="w-28 h-28 mx-auto rounded-full bg-stone-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
                        {data.handle.charAt(0).toUpperCase()}
                    </div>
                )}

                <h1 className="text-2xl font-bold text-stone-700 mt-4">
                    {data.firstName} {data.lastName}
                </h1>
                <p className="text-stone-600">@{data.handle}</p>

                {data.description && (
                    <p className="mt-4 text-stone-700 leading-relaxed">
                        {data.description}
                    </p>
                )}

                <div className="mt-6 space-y-3">
                    {links.length ? (
                        links.map((link) => (
                            <a
                                href={link.url}
                                key={link.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-stone-400 hover:bg-stone-600 text-stone-700 font-semibold shadow-md transition transform hover:scale-[1.02] capitalize"
                            >
                                <img
                                    src={`/social/icon_${link.name}.svg`}
                                    alt={`icon_${link.name}`}
                                    className="w-10" 
                                />
                                Visit my {link.name}
                            </a>

                        ))
                    ) : (
                        <p className="text-stone-300">No links enabled</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HandleComponent
