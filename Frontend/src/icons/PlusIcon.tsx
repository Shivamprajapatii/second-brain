
interface PlusIconProps {
    size : "md" | "sm" | "lg"
};

const sizeVariants = {
    "lg" : "size-6",
    "md" : "size-4",
    "sm" : "size-2"
}

export const PlusIcon = (props: PlusIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVariants[props.size]}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
    )
}



