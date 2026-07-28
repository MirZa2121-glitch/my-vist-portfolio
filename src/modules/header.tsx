import { useState, useEffect } from "react";

// Heaader block

const Header = function() {
    const [isOpen, setIsOpen] = useState(false);

    const nav = [
        {id: 1, name: 'About me', href: '#about'},
        {id: 2, name: 'Projects', href: '#portfolio'},
        {id: 3, name: 'UX/UI', href: '#work'},
        {id: 4, name: 'Stack', href: '#stack'},
        {id: 5, name: 'Another work', href: '#another'},
        {id: 6, name: 'Contact', href: '#contact'},
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return(
        <>
            <header className="backdrop-blur-2xl w-full top-0 right-0 fixed z-10 bg-[#F8FAFC]">
                <div className="w-full m-auto p-[0_15px] lg:max-w-7xl">
                    <div className="py-10 flex items-center justify-between">
                        <div>
                            <a href="#intro" className="text-[28px] font-bold text-[#111827]">Mirza.<abbr className="text-[#6D5EF9]">dev</abbr></a>
                        </div>
                        
                        <nav className="hidden lg:flex">
                            <ul className="flex gap-10">
                                {nav.map($nav => (
                                    <li key={$nav.id}>
                                        <a href={$nav.href} className="text-[#111827] hover:text-[#5B49F5] duration-100">{$nav.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <a href="#contact" className="hidden lg:flex w-43 h-12 items-center justify-center rounded-[10px] hover:border-2 hover:bg-transparent hover:border-[#6D5EF9] hover:text-[#6D5EF9] duration-150 text-[#F8FAFC] bg-[#6D5EF9]">Contact with me</a>

                        <button 
                            onClick={toggleMenu}
                            className="lg:hidden flex flex-col gap-1.5 p-2"
                            aria-label="Toggle menu"
                        >
                            <span className={`w-6 h-0.5 bg-[#111827] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-[#111827] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-[#111827] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="lg:hidden fixed inset-0 top-24 bg-black/30 z-40" onClick={() => setIsOpen(false)}></div>
                    )}

                    <div className={`lg:hidden fixed top-24 left-0 right-0 bg-white/95 backdrop-blur-md transform transition-all duration-300 z-50 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                        <nav className="p-6">
                            <ul className="flex flex-col gap-6">
                                {nav.map($nav => (
                                    <li key={$nav.id}>
                                        <a 
                                            href={$nav.href} 
                                            className="text-[#111827] hover:text-[#5B49F5] duration-100 text-lg font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {$nav.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                                <a 
                                    href="#contact" 
                                    className="w-full flex items-center justify-center h-12 rounded-[10px] text-[#F8FAFC] bg-[#6D5EF9] hover:bg-[#5B49F5] duration-150 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact with me
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;