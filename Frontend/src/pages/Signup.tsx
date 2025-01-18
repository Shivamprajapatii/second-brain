import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = usernameRef.current?.value;
        
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username,
                password
        });

        navigate("/signin");
    };

    return (
        <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white border min-w-48 p-8 rounded-xl">
            <h3 className="font-bold text-3xl text-center pb-6">SignUp</h3>
                <Input refrence={usernameRef} placholder="Username" />
                <Input refrence={passwordRef} placholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signup} variant="primary" title="Signup" fullWidth={true} />
                </div>
                <Link to="/signin">already have account</Link>
            </div>
        </div>
    )
};