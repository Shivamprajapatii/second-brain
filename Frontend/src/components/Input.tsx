interface Input {
    placholder: string;
    onChange: () => void;
}

export function Input({ placholder, onChange }: Input ) {
    return (
        <div>
            <input type={"text"} placeholder={placholder} className="p-2 border rounded-md m-1 " onChange={onChange} />
        </div>
    )
}