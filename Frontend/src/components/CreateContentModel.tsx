import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Instagram = "instagram" 
}

interface CreateContentModelProps {
    open : any;
    onClose : any;
}


export function CreateContentModel({ open, onClose } : CreateContentModelProps) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        },{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        });

        onClose();
             
    }

    return (
        <div>
            {/* if and only if model is open then render this thing */}
            {open && <div>
                <div className="h-screen w-screen bg-slate-400 fixed top-0 left-0 opacity-60 flex justify-center">

                </div>
                <div className="h-screen w-screen fixed left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded-sm">

                            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                                <CloseIcon />
                            </div>
                            <div>
                                <Input refrence={titleRef} placholder={"title"} />
                                <Input refrence={linkRef} placholder={"URL"} />
                            </div>
                            <div>
                                <h3>Type</h3>
                                <div className="flex gap-1">
                                    <Button variant={type === ContentType.Youtube ? "primary" : "secondary"} title="Youtube" onClick={() => {
                                        setType(ContentType.Youtube);
                                    }} />
                                    <Button variant={type === ContentType.Twitter ? "primary" : "secondary"} title="Twitter" onClick={() => {
                                        setType(ContentType.Twitter);
                                    }} />
                                    <Button variant={type === ContentType.Instagram ? "primary" : "secondary"} title="Instagram" onClick={() => {
                                        setType(ContentType.Instagram);
                                    }} />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button onClick={addContent} title="Add Content" variant="dangour" />
                            </div>

                        </span>
                    </div>
                </div>
            </div>}
        </div>
    );
};
