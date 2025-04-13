import { useRef, useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const checkUsername = async (username: string) => {
        if (!username) return;

        try {
            const response = await axios.get<{ exists: boolean }>(
                `${BACKEND_URL}/api/v1/check-username/${username}`
            );
            if (response.data.exists) {
                setMessage("Username already exists ❌");
            } else {
                setMessage("Username available ✅");
            }
        } catch (error) {
            console.error("Error checking username:", error);
        }
    };

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username && !password) {
            console.error("Username and password are required");
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });

            const jwt = response.data.token;
            if (!jwt) {
                console.error("Token not received!");
                return;
            }

            localStorage.setItem("token", jwt);

            navigate("/dashboard");

        } catch (error) {
            console.error("Signup Error:");
        }
    };

    return (
        <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white border min-w-48 p-8 rounded-xl">
                <h3 className="font-bold text-3xl text-center pb-6">SignUp</h3>
                <p className="items-center text-center">{message}</p>
                <Input refrence={usernameRef} placholder="Username" onChange={(e: any) => {
                    setUsername(e.target.value);
                    checkUsername(e.target.value); // Call function on change
                }} />

                <Input refrence={passwordRef} placholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signup} variant="primary" title="Signup" fullWidth={true} />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Already have an account? <Link to="/signIn" className="text-blue-500 hover:underline">SignIn</Link>
                </p>
            </div>
        </div>
    )
};