import {X, Menu } from "lucide-react"
import { useState,type FC } from "react";
import '../../App.css'

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({isOpen, setIsOpen}) => {
    const [DropDown,setDropDown] = useState<boolean>(false); 
    return(
        <div className={`bg-white text-black duration-300 text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)] ease-in-out ${isOpen ? "w-64" : "w-16"}`}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?   <Menu/>: <X/>}
                </button>
                <button onClick={() => setDropDown(!DropDown)}>
                    Toggle Dropdown
                    {DropDown? <p>dropdown closed</p> : <p> dropdown open</p>}
                </button>
        </div>
    );
};

export default Sidebar;