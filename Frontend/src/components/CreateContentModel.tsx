import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";


export function CreateContentModel({ open, onClose }) {
    return (
        <div>
            {/* if and only if model is open then render this thing */}
            {open && <div className="h-screen w-screen bg-slate-400 fixed top-0 left-0 opacity-90 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded-sm">

                        <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CloseIcon />
                        </div>

                        <div>
                            <InputComponet type="text" placholder={"title"} />
                            <InputComponet type={"Link"} placholder={"URL"} />
                        </div>
                        <div className="flex justify-center">
                        <Button title="Submit" variant="primary" />
                        </div>
                    </span>
                </div>
            </div>}
        </div>
    );
};


// interface Input {
//     type: string;
//     placholder: string;
//     onChange: () => void;
// }

function InputComponet({ placholder, onChange } : {onChange() : () => void }) {
    return (
        <div>
            <input type={"text"} placeholder={placholder} className="p-2 border rounded-md m-1 " onChange={onChange} />
        </div>
    )
}