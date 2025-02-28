import ShareIcon from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/Delete";
import { NoteBook } from "../icons/Notebook";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect } from "react";


interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter" | "instagram";
}

export function Card({ title, link, type }: CardProps) {

  // Load Instagram script
  useEffect(() => {
    if (type === "instagram") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [type]);

  useEffect(() => {
    if (type === "twitter") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [type]);

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg border border-gray-200 max-w-md w-full">
     
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-purple-600">
            <NoteBook />
          </div>
          <div className="text-lg font-semibold text-gray-800">{title}</div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ShareIcon />
          </a>
          <button
            onClick={async () => {
             await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                  Authorization: localStorage.getItem("token"),
                }, 
                data: {
                  title
                }
              })
              window.location.reload();
            }}
            className="text-red-600 hover:text-red-800"
          >
            <DeleteIcon  />
          </button>
        </div>
      </div>

    
      <div className="pt-4">
        {type === "youtube" && link && (() => {
          try {
            const videoId = new URLSearchParams(new URL(link).search).get("v");
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
              <iframe
                className="w-full h-48 rounded-md border border-gray-300"
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

        {type === "twitter" && (
          <blockquote className="twitter-tweet w-full rounded-md border border-gray-300">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {type === "instagram" && (
          <div className="instagram-container w-full flex justify-center">
            <blockquote
              className="instagram-media w-full border border-gray-300 rounded-md"
              data-instgrm-permalink={link}
              data-instgrm-version="14"
            >
              <a href={link}></a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
