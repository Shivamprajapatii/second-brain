import ShareIcon from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/Delete";
import { NoteBook } from "../icons/Notebook";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "twitter" | "instagram";
};

export function Card({ title, link, type }: CardProps) {
    return (
        <div className="p-4 bg-white rounded-md border-purple-800 max-w-72 border min-h-48">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="pl-1">
                        < NoteBook />
                    </div>
                    <div className="text-sm font-medium pl-2">
                        {title}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="pr-6">
                        <a href={link} target="_blank">
                            < ShareIcon />
                        </a>
                    </div>
                    <div className="pr-4 cursor-pointer" onClick={() => {
                        axios.delete(`${BACKEND_URL}/api/v1/content`,{
                            headers : {
                                Authorization : localStorage.getItem("token")
                            }
                        });
                    }}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <div className="pt-6">

                {type === "youtube" && link && (() => {
                    try {
                        const videoId = new URLSearchParams(new URL(link).search).get("v");
                        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                        return (
                            <iframe
                                className="w-full h-48"
                                src={embedUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        );
                    } catch (error) {
                        console.error("Invalid YouTube link:", error);
                        return null;
                    }
                })()}

                {type === "twitter" && <blockquote className="twitter-tweet h-48 w-5">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>
                }

            </div>

        </div>
    )
}



