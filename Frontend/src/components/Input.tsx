interface InputProps {
    placholder: string;
    refrence ? : any;
}

export function Input({ placholder, refrence}: InputProps ) {
    return (
        <div>
            <input ref={refrence} type={"text"} placeholder={placholder} className="p-2 border rounded-md m-1 " />
        </div>
    )
}