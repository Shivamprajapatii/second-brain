interface InputProps {
    placholder: string;
    refrence ? : any;
    onChange ? : any
}

export function Input({ placholder, refrence, onChange}: InputProps ) {
    return (
        <div>
            <input onChange={onChange} ref={refrence} type={"text"} placeholder={placholder} className="p-2 border rounded-md m-1 lg w-full "/>
        </div>
    )
}