import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        });

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        navigate("/dashboard");

    };

    return (
        <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white border min-w-48 p-8 rounded-xl">
                <h3 className="font-bold text-3xl text-center pb-6">SignIn</h3>
                <Input refrence={usernameRef} placholder="Username" />
                <Input refrence={passwordRef} placholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signin} variant="primary" title="Signin" fullWidth={true} />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Don't have an account? <Link to="/signUp" className="text-blue-500 hover:underline">SignUp</Link>
                </p>
            </div>
        </div>
    )
}