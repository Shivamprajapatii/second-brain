import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function Signup() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white border min-w-48 p-8 rounded-xl">
                <Input placholder="Username" />
                <Input placholder="Password" />
                <div className="flex justify-center">
                    <Button variant="primary" title="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    )
}