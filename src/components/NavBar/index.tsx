import { Vinicius } from './../../assets/index'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// import GoogleTranslate from '../GoogleTranslate';

import AnchorLink from "react-anchor-link-smooth-scroll"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
    const names = [{ name: "About me", id: "#Aboutme" }, { name: "Experience", id: "#Experience" }, { name: "Knowledge", id: "#Knowledge" }, { name: "Projects", id: "#Project" }, { name: "Academic", id: "#Academic" }];

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);

    const closeMenu = () => {
        setMenuOpened(false);
    }

    return (
        <nav className=" bg-[#121317] mt-0 rounded-none border-b justify-between md:mt-10 h-32 flex items-center md:justify-evenly md:bg-[#12131754] md:rounded-3xl md:border border-[#1f6868a3]">
            <img className="ml-20 md:ml-0 w-14 cursor-pointer hover:scale-125 transition-all duration-500" src={Vinicius} alt="..." />
            <ul className="hidden md:flex mx-6">
                {names.map((name, i) => (
                    <li className='text-3xl font-normal mx-10 cursor-pointer hover:text-primary-primary transition-all duration-500' key={i}>
                        <AnchorLink offset={() => 46} href={name.id}> {name.name}</AnchorLink>
                    </li>
                ))}
            </ul>
            <div className="hidden md:flex">
                {/* <GoogleTranslate /> */}
            </div>
            <DropdownMenu open={menuOpened} onOpenChange={setMenuOpened}>
                <DropdownMenuTrigger className="md:hidden" onClick={toggleMenu}>
                    {menuOpened ? (
                        <X className="md:hidden mr-20" size={42} strokeWidth={2} />
                    ) : (
                        <Menu className="md:hidden mr-20" size={42} strokeWidth={1} />
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="md:hidden flex flex-col  h-screen w-screen bg-[#121317] border-none">
                    <div className='h-4/6'>
                        {names.map((name, i) => (
                            <DropdownMenuItem
                                // open={menuOpened!} 
                                className="font-lexend h-1/6 font-light justify-center cursor-pointer text-slate-400 text-5xl bg-[#121317]"
                                key={i}
                            >
                                <AnchorLink offset={() => 10} href={name.id} > {name.name} </AnchorLink>
                            </DropdownMenuItem>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>

    );
}