import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../Config";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = usernameRef.current?.value;
        
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
        });

        alert("You have signed up");
    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white border min-w-48 p-8 rounded-xl">
                <Input refrence={usernameRef} placholder="Username" />
                <Input refrence={passwordRef} placholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signup} variant="primary" title="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    )
}