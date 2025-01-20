import { ReactElement } from "react";

export default function ({ text, icon, onClick }: {
  text: string,
  icon: ReactElement;
  onClick : () => void;
}) {
  return (
    <div className="flex items-center text-gray-700 py-2 cursor-pointer
     hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
      <div className="p-2" onClick={onClick}>
        {icon}
      </div>
      <div className="font-bold tsxt-sm">
        {text}
      </div>
    </div>
  );
};
