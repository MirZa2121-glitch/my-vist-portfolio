import $logoT from '../assets/img/logo/Ares.svg';
import { $ICONS } from '../components/IMG';

const Header = function() {
    const $addEvent = () => {
        alert('ИИ Ассистент Арес временно в разработке, и будет добавлен вероятно после следующей версий как освою интеграцию.')
    }

    return(
        <header className="backdrop-blur-2xl w-full top-0 right-0 fixed z-10 bg-[#f0f0f055]">
            <div className="w-full m-auto p-[0_15px] lg:max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-[28px_0] md:p-[30px_0]">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <a href="#intro" className="text-[27px] md:text-[35px] hidden md:block lg:block font-bold">Mirza<abbr className="text-[#cd0000dd]">.</abbr></a>
                    </div>
                    <nav className="w-full md:w-auto h-15 flex items-center justify-center">
                        <ul className="flex flex-wrap items-center justify-center gap-10 px-2 py-1 text-sm md:text-base">
                            <li>
                                <a href="#intro" className="border-[#232323] duration-150 inline-flex items-center justify-center px-2 hover:scale-120">
                                    <img src={$ICONS.main} alt="" className="w-10 block"/>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="border-[#232323] duration-150 inline-flex items-center justify-center px-2 hover:scale-120">
                                    <img src={$ICONS.portfolio} alt="" className="w-10 block"/>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="border-[#232323] duration-150 inline-flex items-center justify-center px-2 hover:scale-120">
                                    <img src={$ICONS.about} alt="" className="w-8 block"/>
                                </a>
                            </li>
                            <li>
                                <a href="#work" className="border-[#232323] duration-150 inline-flex items-center justify-center px-2 hover:scale-120">
                                    <img src={$ICONS.allWorks} alt="" className="w-10 block"/>
                                </a>
                            </li>
                            <div className="flex justify-center md:justify-end">
                                <a href="#" onClick={$addEvent} className="btn-anima-1 w-12 h-11 flex items-center duration-150">
                                    <img src={$logoT} alt="" className='w-12 md:w-12'/>
                                </a>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;