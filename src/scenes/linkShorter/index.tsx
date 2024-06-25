import { useState } from "react"
import LinkHolder from "./LinkHolder";

const LinkShorter = () => {
    const [link, setLink] = useState("https://chatgpt.com/c/f59dde9e-ef24-4008-baa5-75d43f9ef761")
    const [shortLink, setShortLink] = useState("https://chatgpt.com/")
    const handleSubmit = async (e) => {
        e.preventDefault(link);

    }
    return (
        <section className="bg-gray md:h-screen">
            <div className="md:flex items-center justify-center w-[90%] md:w-5/6 mx-auto px-6 py-8  transform -translate-y-14 rounded-md bg-primary-200 bg-bgShortenMob md:bg-bgShortenDesk bg-cover bg-no-repeat">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                    <input
                        className="rounded-md p-2 w-full md:w-[85%] "
                        type="text"
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Shorten a link here..."
                    />
                    <button className="px-4 py-2 rounded-md w-full md:w-[15%] bg-primary-100 text-white font-semibold hover:cursor-pointer"
                        onClick={handleSubmit}>
                        Shorten it!
                    </button>
                </div>
            </div>
            <div className="mx-auto w-5/6 p-2 ">
                {/* Shorten links display */}
                <LinkHolder link={link} shortLink={shortLink} />
                <LinkHolder link={link} shortLink={shortLink} />
                <LinkHolder link={link} shortLink={shortLink} />

            </div>
            <div className="w-full">
                <div className="flex-col items-center justify-center w-5/6 mx-auto text-center">
                    <p className="text-[2rem] text-very-dark-voilet font-semibold mt-12"> Advanced Statistics</p>
                    <p className="text-grayish-voilet w-[50%] mx-auto">Track how your links are performing across the web with our
                        advanced statistics dashboard.</p>
                </div>
            </div>
        </section>
    )
}

export default LinkShorter