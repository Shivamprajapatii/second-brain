import { BrainLogo } from "../icons/BrainLogo";
import { Instagram } from "../icons/InstagramIcon";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/Youtube";
import SideBarItem from "./SideBarItem";

export function SideBar({onSelect} : {onSelect: (type : string) => void}) {
    return (
        <div className="h-screen w-64 bg-white fixed top-0 left-0 border-r pt-6">
            <div className="flex text-3xl font-bold pl-6 items-center">
                <div className="pr-2">
                    {<BrainLogo/>}
                </div>
                Second Brain
               
            </div>
            <div className="pt-4 flex flex-col ml-5 w-48">
                <SideBarItem onClick={() => onSelect("twitter")} text="Twitter" icon={< TwitterIcon />} />
                <SideBarItem onClick={() => onSelect("youtube")} text="Youtube" icon={<YoutubeIcon />} />
                <SideBarItem onClick={() => onSelect("instagram")} text="Instagram" icon={<Instagram />} />
            </div>
        </div>
    );
};