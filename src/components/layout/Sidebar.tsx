import { X, Menu } from "lucide-react";
import { useState, type FC } from "react";
import logo from '../../assets/logo.jpg'
import '../../App.css';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const [DropDown, setDropDown] = useState<boolean>(false); 

    return(
        <div className={`bg-white text-black duration-300 transition-all text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)] ease-in-out flex flex-col h-screen ${isOpen ? "w-64" : "w-24"}`}>
            
            <div className="flex items-center justify-between p-3 border-b border-slate-100">
                
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-300 shrink-0 ${isOpen ? "w-10 h-10 text-lg" : "w-8 h-8 text-sm"}`}>
                        <img 
                            src={logo} 
                            alt="App Logo" 
                            className="w-full h-full object-contain" 
                        />
                    </div>
                    <div className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                        <span className="font-bold text-base tracking-tight">ProjectX</span>
                    </div>
                </div>

                <button 
                    className="p-1.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Sidebar"
                >
                    {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            <div className="p-3 flex-1 flex flex-col gap-2">
                <button 
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100 transition-colors text-left w-full"
                    onClick={() => setDropDown(!DropDown)}
                >
                    <span className="shrink-0">⚙️</span>
                    <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                        Toggle Dropdown
                    </span>
                </button>

                {DropDown && isOpen && (
                    <div className="pl-6 text-xs text-slate-500 animate-fadeIn">
                        <p>Dropdown item 1</p>
                        <p>Dropdown item 2</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;