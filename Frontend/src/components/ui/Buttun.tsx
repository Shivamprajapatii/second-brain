import { ReactElement } from "react";

interface ButtonInterface {
    title: string;
    size: "sm" | "lg" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement
    variant : "primary" | "secondary"
};

const sizeStyle = {
    "lg": "px-8 py-4 text-xl rounded-2xl",
    "md": "px-4 py-2 text-md rounded-xl",
    "sm": "px-2 py-1 text-sm rounded-sm"
};

const variantStyle = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonInterface) => {
    return (
        <button className={sizeStyle[props.size] + " " + variantStyle[props.variant]} >
            <div className="flex items-center">
                {props.startIcon}
                <div className="pl-2 pr-2">
                    {props.title}
                </div>
                {props.endIcon}
            </div>
        </button>
    )
};
