import { BrainLogo } from "../icons/BrainLogo";
import { Instagram } from "../icons/InstagramIcon";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/Youtube";
import SideBarItem from "./SideBarItem";

export function SideBar() {
    return (
        <div className="h-screen w-64 bg-white fixed top-0 left-0 border-r pt-10">
            <div className="flex text-3xl font-bold pl-6 items-center">
                <div className="pr-2">
                    {<BrainLogo/>}
                </div>
                Second Brain
               
            </div>
            <div className="pt-4 flex flex-col ml-5">
                <SideBarItem text="Twitter" icon={< TwitterIcon />} />
                <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
                <SideBarItem text="Instagram" icon={<Instagram />} />
            </div>
        </div>
    );
};