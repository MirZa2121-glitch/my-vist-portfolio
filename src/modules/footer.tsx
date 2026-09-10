import { $ICONS } from '../components/IMG.ts';
import { useTranslation } from 'react-i18next';

// Footer block

const Footer = function() {
    const { t } = useTranslation();
    return (
        <footer id='contact' className="bg-[#0B1224] text-[#CFD4E8]">
            <div className="w-full lg:max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold text-white">Mirza.dev</h2>
                        <p className="text-sm text-[#B7C0E2]">{t('footer.description')}</p>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/MirZa2121-glitch" className="footer-icon flex h-11 w-11 items-center justify-center rounded-full border border-[#445076] bg-[#141B34] hover:bg-[#6D5EF9] transition">
                                <img src={$ICONS.github} alt={t('footer.github')} className="h-5 w-5" />
                            </a>
                            <a href="@mirza_amir_r" className="footer-icon flex h-11 w-11 items-center justify-center rounded-full border border-[#445076] bg-[#141B34] hover:bg-[#6D5EF9] transition">
                                <img src={$ICONS.send} alt="Telegram" className="h-5 w-5" />
                            </a>
                            <a href="mailto:mirza.dev@gmail.com" className="footer-icon flex h-11 w-11 items-center justify-center rounded-full border border-[#445076] bg-[#141B34] hover:bg-[#6D5EF9] transition">
                                <img src={$ICONS.mail} alt={t('footer.email')} className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-white">{t('footer.navigation')}</h3>
                        <ul className="space-y-3 text-sm text-[#B7C0E2]">
                            <li><a href="#about" className="hover:text-white transition">{t('nav.about')}</a></li>
                            <li><a href="#portfolio" className="hover:text-white transition">{t('nav.projects')}</a></li>
                            <li><a href="#work" className="hover:text-white transition">{t('footer.uxui')}</a></li>
                            <li><a href="#stack" className="hover:text-white transition">{t('nav.stack')}</a></li>
                            <li><a href="#another" className="hover:text-white transition">{t('footer.other')}</a></li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
                        <div className="space-y-3 text-sm text-[#B7C0E2]">
                            <div>
                                <p className="font-medium">{t('footer.telegram')}</p>
                                <a href="#" className="block hover:text-white transition">@mirza_amir_s</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-[24px] bg-[#111827] p-6">
                        <h3 className="text-lg font-semibold text-white">{t('footer.together')}</h3>
                        <p className="text-sm text-[#B7C0E2]">{t('footer.opportunities')}</p>
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-gradient-to-r from-[#6D5EF9] to-[#7B62FF] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                            {t('footer.contactButton')}
                            <img src={$ICONS.arrowForward} alt="" className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#2E3A57] pt-6 text-sm text-[#93A3BF] flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Mirza.dev. {t('footer.rights')}</p>
                    <a href="#intro" aria-label={t('footer.arrow')} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F2A4B] text-white transition hover:bg-[#6D5EF9]">
                        <img src={$ICONS.arrowDown} alt="" className="h-5 w-5 rotate-180" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;