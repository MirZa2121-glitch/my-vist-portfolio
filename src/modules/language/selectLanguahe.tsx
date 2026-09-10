import { useState } from "react";
import { useTranslation } from 'react-i18next';
import $america from '../../assets/img/language/America.svg';
import $azerbaijan from '../../assets/img/language/Azerbaijan.svg';
import $russia from '../../assets/img/language/russia.svg';
import $sweden from '../../assets/img/language/Sweden.svg';

const languages = [
    { code: 'en', name: 'EN', flag: $america },
    { code: 'ru', name: 'RU', flag: $russia },
    { code: 'sv', name: 'SV', flag: $sweden },
    { code: 'az', name: 'AZ', flag: $azerbaijan },
] as const;

const Language = function() {
    const [ isOpen, setIsOpen ] = useState(false);
    const { i18n, t } = useTranslation();
    const currentLanguage = languages.find((language) => language.code === i18n.language) ?? languages[0];

    const changeLanguage = (code: string) => {
        void i18n.changeLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button type="button" onClick={() => setIsOpen(!isOpen)} aria-label={t('header.language')} aria-expanded={isOpen} className="flex h-12 items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-3 text-sm font-semibold text-[#111827] shadow-sm transition hover:border-[#6D5EF9]">
                <img src={currentLanguage.flag} alt="" className="h-5 w-7 object-cover" />
                <span>{currentLanguage.name}</span>
                <span className={`text-xs transition ${isOpen ? 'rotate-180' : ''}`}></span>
            </button>
            {isOpen && (
                <div className="absolute right-0 top-14 z-50 min-w-36 rounded-[10px] border border-[#E5E7EB] bg-white p-1 shadow-lg">
                    {languages.map((language) => (
                        <button key={language.code} type="button" onClick={() => changeLanguage(language.code)} className="flex w-full items-center gap-3 rounded-[8px] px-3 py-2 text-left text-sm text-[#111827] transition hover:bg-[#F3F1FF]">
                            <img src={language.flag} alt="" className="h-5 w-7 object-cover" />
                            <span>{language.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Language;