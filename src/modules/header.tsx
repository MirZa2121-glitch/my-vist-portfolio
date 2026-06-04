import $logoT from '../assets/img/logo/Ares.svg';

const Header = function() {
    const $addEvent = () => {
        alert('ИИ Ассистент Арес временно в разработке, и будет добавлен вероятно после следующей версий как освою интеграцию.')
    }

    return(
        <header className="w-full top-0 right-0 fixed z-10">
            <div className="w-full m-auto p-[0_15px] lg:max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-[22px_0] md:p-[30px_0]">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <a href="#intro" className="text-[27px] md:text-[35px] font-bold">Mirza<abbr className="text-[#cd0000dd]">.</abbr></a>
                    </div>
                    <nav className="w-full md:w-auto h-15 flex items-center justify-center rounded-[100px] bg-[#acacac65] backdrop-blur-2xl overflow-x-auto">
                        <ul className="flex flex-wrap items-center justify-center gap-3 px-3 py-2 text-sm md:text-base">
                            <li><a href="#intro" className="hover:border-b-2 border-[#232323] duration-50">Intro</a></li>
                            <li><a href="#portfolio" className="hover:border-b-2 border-[#232323] duration-50">Portfolio</a></li>
                            <li><a href="#about" className="hover:border-b-2 border-[#232323] duration-50">About</a></li>
                            <li><a href="#work" className="hover:border-b-2 border-[#232323] duration-50">All Works</a></li>
                        </ul>
                    </nav>
                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <a href="#" onClick={$addEvent} className="btn-anima-1 w-32 md:w-40 h-11 md:h-13 flex items-center justify-center bg-[#a0a0a0] rounded-[100px] duration-150 gap-2 md:gap-3 font-bold text-[14px] md:text-[18px]">
                            <img src={$logoT} alt="" className='w-5 md:w-7'/>
                            Арес
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;