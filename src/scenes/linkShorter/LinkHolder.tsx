import { useState } from "react"
import { useCopyToClipboard } from "usehooks-ts"

type Props = {
    link: string,
    shortLink: string
}

const LinkHolder = ({ link, shortLink }: Props) => {
    const [, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState<boolean>(false);
    return (
        <div className="flex items-center gap-2 my-2 bg-white p-2">
            <input
                className="bg-white placeholder-black w-[60%] p-2 "
                placeholder={link}
                disabled
                readOnly
            />
            <input
                className="bg-white placeholder-primary-100 w-[30%] p-2 "
                placeholder={shortLink}
                disabled
                readOnly
            />
            <button className={` text-white w-[10%] p-2 rounded-md ${copied ? "bg-primary-200" : "bg-primary-100"}`}
                onClick={() => {
                    copy(shortLink);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000)
                }}>{copied ? ("Copied !") : ("Copy ")}</button>
        </div>
    )
}

export default LinkHolder
