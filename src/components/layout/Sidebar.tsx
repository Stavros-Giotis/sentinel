import { X, Menu,MonitorActivity,Signal,Settings } from "lucide-react";
import { useState, useEffect, type FC } from "react";
import logo from '../../assets/logo.jpg';
import '../../App.css';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    // State typed as an array of strings storing open menu IDs
    const [openDropdown, setopenDropdown] = useState<string>("");

    // Reset dropdown state whenever the sidebar is closed (isOpen becomes false)
    useEffect(() => {
        if (!isOpen) {
            setopenDropdown("");
        }
    }, [isOpen]);

    // Toggle function for array state
    const toggleDropdown = (id: string) => {
        if (isOpen) {
            if (openDropdown.includes(id)) {

                setopenDropdown("");
            } else {

                setopenDropdown(id);

            }
        }
    };

    const menuItems = [
        { id: "dashboard", label: "dashboard", icon: <MonitorActivity/>, items: ["Dropdown item 1", "Dropdown item 2"] },
        { id: "activity", label: "activity", icon: <Signal/>, items: ["Dropdown item 1", "Dropdown item 2"] },
        { id: "settings", label: "settings", icon: <Settings/>, items: ["Dropdown item 1", "Dropdown item 2"] },
    ];

    return (
        <div className={`bg-white text-black duration-300 transition-all text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)] ease-in-out flex flex-col h-screen ${isOpen ? "w-64" : "w-24"}`}>
            
            {/* Header / Logo / Toggle */}
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

            {/* Navigation Menu */}
            <div className="p-3 flex-1 flex flex-col gap-2 overflow-y-auto">
                {menuItems.map((menu) => {
                    const isExpanded = openDropdown.includes(menu.id);
                    
                    return (
                        <div key={menu.id} className="flex flex-col gap-1">
                            <button 
                                className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100 transition-colors text-left w-full cursor-pointer"
                                onClick={() => toggleDropdown(menu.id)}
                            >
                                <span className="shrink-0">{menu.icon}</span>
                                <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                                    {menu.label}
                                </span>
                            </button>
                            
                            {isExpanded && isOpen && (
                                <div className="pl-6 text-xs text-slate-500 animate-fadeIn flex flex-col gap-1">
                                    {menu.items.map((subItem, index) => (
                                        <p key={index} className="py-1 hover:text-black cursor-pointer transition-colors">{subItem}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;