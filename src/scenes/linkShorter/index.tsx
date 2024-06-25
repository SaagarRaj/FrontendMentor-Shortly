import { useState } from "react";
import LinkHolder from "./LinkHolder";
import BrandRecognition from "@/assets/images/icon-brand-recognition.svg";
import DetailedRecords from "@/assets/images/icon-detailed-records.svg";
import FullyCustomizable from "@/assets/images/icon-fully-customizable.svg"
const LinkShorter = () => {
    const [link, setLink] = useState("https://chatgpt.com/c/f59dde9e-ef24-4008-baa5-75d43f9ef761");
    const [shortLink, setShortLink] = useState("https://chatgpt.com/");
    const [copied, setCopied] = useState<boolean>(false);

    const handleSubmit = async () => {
        // Add the logic to shorten the link and update the state
        setShortLink(""); // Reset the shortLink or update it with the new short link
    };

    return (
        <section className="bg-gray md:h-screen">
            <div className="md:flex items-center justify-center w-[90%] md:w-5/6 mx-auto px-6 py-8 transform -translate-y-14 rounded-md bg-primary-200 bg-bgShortenMob md:bg-bgShortenDesk bg-cover bg-no-repeat">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                    <input
                        className="rounded-md p-2 w-full md:w-[85%] text-left"
                        type="text"
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Shorten a link here..."
                        value={link}
                    />
                    <button
                        className="px-4 py-2 rounded-md w-full md:w-[15%] bg-primary-100 text-white font-semibold hover:cursor-pointer"
                        onClick={handleSubmit}
                    >
                        Shorten it!
                    </button>
                </div>
            </div>
            <div className="mx-auto w-5/6 p-2">
                {/* Shorten links display */}
                <LinkHolder link={link} shortLink={shortLink} />
            </div>
            <div className="w-full mt-12">
                <div className="flex-col items-center justify-center w-5/6 mx-auto text-center">
                    <p className="text-[2rem] text-very-dark-voilet font-semibold">Advanced Statistics</p>
                    <p className="text-grayish-voilet w-[50%] mx-auto">
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>
            </div>

            <div className=" w-5/6 flex flex-col md:flex-row items-center justify-between mx-auto mt-12 z-20">

                <div className="relative bg-white w-full md:w-[30%] p-6 rounded-md mt-[3rem] md:mt-0 ">
                    <div className="absolute bg-primary-200 h-16 w-16 rounded-full flex items-center justify-center p-4  transform -translate-x-2 -translate-y-14">
                        <img src={BrandRecognition} alt="Brand Recognition" />
                    </div>
                    <p className="text-primary-200 font-bold mt-6">Brand Recognition</p>
                    <p className="mt-4 text-grayish-voilet">
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.
                    </p>
                </div>
                <div className="relative bg-white w-full md:w-[30%] p-6 rounded-md mt-[3rem] md:mt-0">
                    <div className="absolute bg-primary-200 h-16 w-16 rounded-full flex items-center justify-center p-4  transform -translate-x-2 -translate-y-14">
                        <img src={DetailedRecords} alt="Detailed Records" />
                    </div>
                    <p className="text-primary-200 font-bold mt-6">Detailed Records</p>
                    <p className="mt-4 text-grayish-voilet">
                        Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.

                    </p>
                </div>
                <div className="relative bg-white w-full md:w-[30%] p-6 rounded-md mt-[3rem] md:mt-0">
                    <div className="absolute bg-primary-200 h-16 w-16 rounded-full flex items-center justify-center p-4  transform -translate-x-2 -translate-y-14">
                        <img src={FullyCustomizable} alt="Fully Customizable" />
                    </div>
                    <p className="text-primary-200 font-bold mt-6">Fully Customizable</p>
                    <p className="mt-4 text-grayish-voilet">
                        Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default LinkShorter;
