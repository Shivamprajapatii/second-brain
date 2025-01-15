import { BrainLogo } from "../icons/BrainLogo";
import { Instagram } from "../icons/InstagramIcon";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/Youtube";
import SideBarItem from "./SideBarItem";

export function SideBar() {
    return (
        <div className="h-screen w-72 bg-white fixed top-0 left-0 border-r pl-4 pt-6">
            <div className="flex text-2xl pl-6 items-center">
                <div className="pr-4 text-purple-400">
                    {<BrainLogo/>}
                </div>
                Second Brain
               
            </div>
            <div className="pt-4 pl-4">
                <SideBarItem text="Twitter" icon={< TwitterIcon />} />
                <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
                <SideBarItem text="Instagram" icon={<Instagram />} />
            </div>
        </div>
    );
};