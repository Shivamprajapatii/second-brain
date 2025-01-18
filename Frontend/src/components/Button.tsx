import { ReactElement } from "react"

interface ButtonProps {
    variant: "primary" | "secondary" |"dangour",
    title: string,
    startIcon ?: ReactElement,
    onClick ?: () => void;
    fullWidth ? : boolean;
}

const variantClass = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400",
    "dangour" : "bg-red-600 text-white"
}

const defaultStyle = "px-4 py-2 m-2 rounded-md font-normal flex items-center";

export const Button = ({ variant, title, startIcon, onClick, fullWidth }: ButtonProps) => {
    return (
        <button onClick={onClick} className={variantClass[variant] + " " + defaultStyle + 
        `${fullWidth ? " w-full flex justify-center items-center" : ""}`}>
            <div className="pr-2">
                {startIcon}
            </div>
            {title}
        </button>
    )
}