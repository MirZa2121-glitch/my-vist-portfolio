//Imports

import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { $port } from '../components/work.ts';
import $logo_1 from '../assets/img/logo/Logo.svg';
import $imgComp from '../assets/img/background/Comp.svg';
import { $allPort } from '../components/work.ts';

gsap.registerPlugin(ScrollTrigger);

//Intro block

export const Intro = function() {
    useGSAP(() => {
        gsap.from('.intro__text', {
            scrollTrigger: {
                trigger: '.intro__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.6,
            ease: 'power2.out',
        })

        gsap.from('.intro__desc', {
            scrollTrigger: {
                trigger: '.intro__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.9,
            ease: 'power2.out',
        })

        gsap.from('.circle-pulse-1', {
            scrollTrigger: {
                trigger: '.intro__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 1.1,
            ease: 'power2.out',
        })

        gsap.from('.circle-pulse-2', {
            scrollTrigger: {
                trigger: '.intro__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 1.3,
            ease: 'power2.out',
        })
    })

    return (
        <section className="intro__block flex items-center justify-center" id="intro">
            <div className="w-full max-w-5xl mx-auto px-4 py-15 sm:py-20">
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <div className="w-45 sm:w-55 md:w-75 pt-20 flex justify-center m-auto">
                        <div className="circle-pulse-1 flex justify-center items-center m-[30px_0] sm:m-[50px_0]">
                            <div className="circle-pulse-2">
                                <img src={$logo_1} alt="logo" className=" sm:block"/>
                            </div>
                        </div>
                    </div>
                    <h1 className="intro__text text-2xl sm:text-3xl md:text-[35px] text-[#1a1a1a] max-w-2xl">Junior Frontend Developer</h1>
                    <p className="intro__desc text-[#1a1a1add] text-sm sm:text-base md:text-[16px] leading-7 max-w-xl">Здравствуйте я Мирза а это моя визитка. На кнорках наверху 4 ориентира. 1. Интро, 2. Портфолио, 3. О, 4. Другие работы. ИИ Арес все еще не добавлен т.к. учу интеграцию.</p>
                    <a href="#portfolio" className="intro__btn flex items-center justify-center cursor-pointer w-32 sm:w-40 h-11 sm:h-13 m-[10px_0] rounded-[100px] hover:bg-transparent duration-150 border-2 border-[#2d2d2d] bg-[#2d2d2d] text-white hover:text-[#2d2d2d]">Next /</a>
                </div>
                <hr className='mt-8 text-[#1a1a1a]'/>
            </div>
        </section>
    )
}

// Portfolio block

export const Portfolio = function() {
    useGSAP(() => {
        gsap.from('.portfolio__title', {
            scrollTrigger: {
                trigger: '.portfolio__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.8,
            ease: 'power2.out',
        })

        gsap.from('.portfolio__text', {
            scrollTrigger: {
                trigger: '.portfolio__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 1,
            ease: 'power2.out',
        })
    })

    return (
        <section id="portfolio" className="portfolio__block">
            <div className="w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-24">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="portfolio__title text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">Portfolio</h2>
                    <p className="portfolio__text text-[#232323] leading-7">В этом разделе мои работы, написанные на смешаном стеке но обновляющиеся по мере моего возможности</p>
                </div>
                <div className="w-full">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        spaceBetween={16}
                        navigation
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-8"
                    >
                        {$port.map($card => (
                            <SwiperSlide key={$card.id}>
                                <a href={$card.href} className="portfolio__card block rounded-2xl border border-[#d1d1d1] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                    <img src={$card.IMG} alt='' className='pb-10'/>
                                    <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">{$card.name || 'Проект'}</h4>
                                    <p className="text-sm text-[#4a4a4a] leading-5">{$card.desc || 'Проекты в будущем добавлю, если моя лень разрешит'}</p>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

// About block

export const About = function() {
    useGSAP(() => {
        gsap.from('.about__title', {
            scrollTrigger: {
                trigger: '.about__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out',
        })

        gsap.from('.about__text', {
            scrollTrigger: {
                trigger: '.about__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.15,
            ease: 'power2.out',
        })

        gsap.from('.about__image', {
            scrollTrigger: {
                trigger: '.about__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.25,
            ease: 'power2.out',
        })
    })

    return (
        <section id='about' className='about__block'>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-24'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <div className='w-full'>
                            <h2 className='about__title text-2xl sm:text-3xl md:text-[35px] font-bold text-[#1a1a1a]'>About</h2>
                            <p className='about__text font-bold text-xl sm:text-[30px] text-[#1a1a1a] py-4'>Здравствуйте!</p>
                            <p className='about__text text-[#2c2c2c] text-sm sm:text-base leading-7 mb-4'>Меня зовут Мирза, владею навыками в React, TypeScript, HTML, CSS, SCSS, JavaScrip. Использую библиотеки GSAP, Tailwind CSS, Anime.js, Swiper.js .Это мой кабинет чтобы вы могли взглянуть на мои работы. Здесь почти ничего нет но время от времени стараюсь обновлять и не забивать на новые обновления</p>
                            <p className='about__text text-[#2c2c2c] text-sm sm:text-base leading-7'>Так же готовлю внедрить своего Ассистента Ареса в этот сайт. Так же практиткую сторону UI/UX для создания своих макетов для тестовых задач. Этот сайт был написан точно так же как и другие на React и TypeScript. Изображения и логотипы были придуманы мной и созданы мной, основу использовал Фигма. В остальных работах попытаюсь показать все что умею создавать.</p>
                        </div>
                    </div>
                    <img src={$imgComp} alt='logo' className='about__image hidden lg:block w-full lg:w-1/2 max-w-[520px]' />
                </div>
            </div>
        </section>
    )
}

// Works block

export const Works = function() {
    useGSAP(() => {
        gsap.from('.works__title', {
            scrollTrigger: {
                trigger: '.works__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out',
        })

        gsap.from('.works__slide', {
            scrollTrigger: {
                trigger: '.works__block',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.1,
            stagger: 0.12,
            ease: 'power2.out',
        })
    })

    return (
        <section className='works__block' id='work'>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-24'>
                <div>
                    <div>
                        <div className='max-w-2xl mx-auto text-center mb-10 px-2 sm:px-0'>
                            <h2 className='works__title text-2xl sm:text-3xl md:text-[35px] font-bold text-[#1a1a1a]'>All Works</h2>
                            <p className='text-[#2c2c2c] text-sm sm:text-base py-4'>Здесь мои другие работы созданые в разных програмах.</p>
                        </div>
                        <div className="w-full">
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={3}
                                spaceBetween={16}
                                navigation
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="pb-8"
                            >
                                {$allPort.map($cardPort => (
                                    <SwiperSlide key={$cardPort.id} className='works__slide'>
                                        <a href={$cardPort.href} className="block rounded-2xl border border-[#d1d1d1] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md max-w-sm mx-auto">
                                            <img src={$cardPort.IMG} alt='' className='pb-10 w-full h-auto  sm:block'/>
                                            <h4 className="text-base sm:text-lg font-semibold text-[#1a1a1a] mb-2">{$cardPort.name || 'Проект'}</h4>
                                            <p className="text-sm text-[#4a4a4a] leading-5">{$cardPort.desc || 'Проекты в будущем добавлю, если моя лень разрешит'}</p>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}