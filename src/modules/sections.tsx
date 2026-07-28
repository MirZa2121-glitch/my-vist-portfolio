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
import { $allPort } from '../components/work.ts';
import { $ICONS } from '../components/IMG.ts';

gsap.registerPlugin(ScrollTrigger);

//Intro block

export const Intro = function() {
    const $icons = [
        {id: 1, IMG: $ICONS.react},
        {id: 2, IMG: $ICONS.typescript},
        {id: 3, IMG: $ICONS.tailwindcss},
        {id: 4, IMG: $ICONS.vite},
        {id: 5, IMG: $ICONS.javascript},
    ]

    useGSAP(() => {
        gsap.from('.intro__title', {
            scrollTrigger: {
                trigger: '.intro__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out',
        })

        gsap.from('.intro__desc', {
            scrollTrigger: {
                trigger: '.intro__desc',
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
        <section className="intro__block flex items-center justify-center" id="intro">
            <div className="w-full max-w-5xl py-15 sm:py-20 lg:max-w-7xl">
                <div className='py-10'>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                        <div className='w-full lg:max-w-[720px] pt-10'>
                            <p className='w-45 h-8 my-5 flex items-center justify-center text-[14px] font-semibold rounded-4xl bg-[hsl(0,0%,91%)] text-[#6D5EF9]'>Front-End developer</p>
                            <h1 className='intro__title text-[44px] sm:text-[52px] lg:text-[60px] font-semibold leading-[1.05]'>I turn ideas into <abbr className='text-[#6D5EF9]'>fast, beautiful web</abbr> applications.</h1>
                            <p className='intro__desc py-8 sm:py-10 text-[16px] sm:text-[18px] leading-8 text-[#667085]'>React developer creating modern, user-friendly interfaces with attention to detail.</p>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                                <a href='#portfolio' className='w-full sm:w-60 h-15 flex items-center justify-center rounded-[10px] bg-[#6D5EF9] text-[#F8FAFC]'>View projects</a>
                                <a href='#about' className='w-full sm:w-40 h-15 flex items-center justify-center rounded-[10px] border-2 border-[#6D5EF9] text-[#6D5EF9]'>About me</a>
                            </div>
                            <div className='mt-10'>
                                <p className='pb-5 text-[#667085] font-semibold'>Tecnology</p>
                                <div className='flex flex-wrap items-center gap-4'>
                                    {$icons.map($block => (
                                        <div key={$block.id} className='flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F8FAFC]'>
                                            <img src={$block.IMG} alt='#' className='w-8'/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:flex w-140 items-center justify-center'>
                            <div className='circle-1'>
                                <div className='hero-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// About block

export const About = function() {
    useGSAP(() => {
        gsap.from('.about__title', {
            scrollTrigger: {
                trigger: '.about__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.8,
            ease: 'power2.out',
        })

        gsap.from('.about__desc', {
            scrollTrigger: {
                trigger: '.about__desc',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 30,
            duration: 2,
            delay: 1,
            ease: 'power2.out',
        })

        gsap.from('.anima__block', {
            scrollTrigger: {
                trigger: '.anima__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: 30,
            duration: 2,
            delay: 1.7,
            ease: 'power2.out',
        })
    })

    const blocks = [
        {id: 1, number: '1', name: 'Cleary code', desc: 'I write clear, maintainable code with a focus on structure.'},
        {id: 2, number: '2', name: 'Adaptive', desc: 'I create interfaces that look great on any device.'},
        {id: 3, number: '3', name: 'Cleary code', desc: 'I write clear, maintainable code with a focus on structure.'},
        {id: 4, number: '4', name: 'Cleary code', desc: 'I write clear, maintainable code with a focus on structure.'},
    ]

    return (
        <section id='about' className=''>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-24 bg-[#0D111B] rounded-[10px]'>
                <div className='flex lg:items-center flex-col lg:flex-row items-start gap-10'>
                    <div className='w-full lg:w-185'>
                        <div className='w-full max-w-full lg:max-w-[560px]'>
                            <p className='w-full sm:w-30 h-7 my-5 rounded-[100px] font-semibold flex items-center justify-center text-[14px] text-[#6D5EF9] bg-[#6e6e6e40]'>About me</p>
                            <h3 className='about__title text-[32px] sm:text-[36px] lg:text-[40px] font-semibold text-[#F8FAFC]'>A little about myself</h3>
                            <p className='about__desc text-[15px] sm:text-[16px] py-5 leading-7 text-[#667085]'>My name is Mirza, and I am a junior frontend developer. I specialize in React, TypeScript, and creating responsive, fast, and user-friendly interfaces. I am constantly learning and practicing, and I strive to write clean, maintainable code.</p>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
                        {blocks.map($items => (
                            <div className='anima__block flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-[20px] border border-[#1E293B] bg-[#111827]/80 p-4' key={$items.id}>
                                <p className='min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[10px] text-[#F8FAFC] bg-[#6D5EF9] text-sm font-semibold'>{$items.number}</p>
                                <div>
                                    <h5 className='text-[18px] sm:text-[20px] font-semibold text-[#F8FAFC]'>{$items.name}</h5>
                                    <p className='text-[#667085] text-sm'>{$items.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

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
                <div className="max-w-2xl mb-12">
                    <p className='w-30 h-7 my-5 rounded-[100px] font-semibold flex items-center justify-center text-[14px] text-[#6D5EF9] bg-[#6e6e6e40]'>Projects</p>
                    <h2 className="portfolio__title text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">My projects</h2>
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
                                    <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">{$card.name || 'Project'}</h4>
                                    <p className="text-sm text-[#4a4a4a] leading-5">{$card.desc || 'Empty card'}</p>
                                    <p className='my-5 font-semibold text-[#6D5EF9] hover:underline'>{$card.underText || 'In development'}</p>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

// Ares.

export const Ares = function() {
    return (
        <section>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-24 bg-[#0D111B] rounded-[10px]'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-10'>
                    <div className='w-full lg:w-115'>
                        <p className='w-full sm:w-40 h-8 my-5 rounded-[100px] font-semibold flex items-center justify-center text-[14px] text-[#6D5EF9] bg-[#6e6e6e40]'>In development</p>
                        <h3 className='about__title text-[32px] sm:text-[36px] lg:text-[40px] font-semibold text-[#fd0707]'>Ares</h3>
                        <p className='about__desc text-[15px] sm:text-[16px] py-5 leading-7 text-[#667085]'>Ares is my personal project—the platform I’m currently working on.</p>
                        <button className='w-full sm:w-45 h-13 border-2 font-semibold border-[#fd0707] rounded-[10px] text-[#d1d1d1]'>Coming soon. 🔒</button>
                    </div>
                    <div className='hidden lg:flex'>
                       <div className='w-140 flex items-center justify-center'>
                            <div className='circle-2'>
                                <div className='hero-2'></div>
                            </div>
                        </div>
                    </div>
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
                        <div className='max-w-2xl mb-10 px-2 sm:px-0'>
                            <h2 className='works__title text-2xl sm:text-3xl md:text-[35px] font-bold text-[#1a1a1a]'>All Works</h2>
                            <p className='text-[#2c2c2c] text-sm sm:text-base py-4'></p>
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
            <hr className='max-w-7xl rounded-2xl mx-auto bg-[#667085]'/>
        </section>
    )
}

export const Technology = function() {
    const $icons2 = [
        {id: 1, IMG: $ICONS.react, name: 'React'},
        {id: 2, IMG: $ICONS.typescript, name: 'TypeScript'},
        {id: 3, IMG: $ICONS.tailwindcss, name: 'Tailwind CSS'},
        {id: 4, IMG: $ICONS.vite, name: 'Vite'},
        {id: 5, IMG: $ICONS.javascript, name: 'JavaScript'},
        {id: 6, IMG: $ICONS.gsap, name: 'GSAP'},
        {id: 7, IMG: $ICONS.css, name: 'CSS'},
        {id: 8, IMG: $ICONS.figma, name: 'Figma'},
        {id: 9, IMG: $ICONS.git, name: 'Git'},
    ]

    return (
        <section id='stack'>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-16 md:py-14'>
                <div className='my-30'>
                    <div className='w-full lg:w-130'>
                        <p className='w-full sm:w-40 h-8 my-5 rounded-[100px] font-semibold flex items-center justify-center text-[14px] text-[#6D5EF9] bg-[#6e6e6e40]'>My stack</p>
                        <h4 className='text-[32px] sm:text-[36px] lg:text-[40px] font-semibold text-[#0D111B]'>Technologies and tools</h4>
                        <p className='text-[15px] sm:text-[16px] py-5 leading-7 text-[#667085]'>I use modern technologies and tools to create high-quality web applications.</p>
                    </div>
                    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {$icons2.map($items2 => (
                            <button key={$items2.id} className='tech-card flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#E5E7EB] bg-white px-5 py-6 text-center transition-all duration-300 ease-out'>
                                <div className='tech-icon-wrapper flex h-16 w-16 items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F8FAFC] transition-all duration-300 ease-out'>
                                    <img src={$items2.IMG} alt={$items2.name} className='h-8 w-8 object-contain' />
                                </div>
                                <span className='text-sm sm:text-[15px] font-semibold text-[#0D111B]'>{$items2.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Another = function() {
    return (
        <section id='another'>
            <div className='w-full lg:max-w-7xl mx-auto px-4 py-6 md:py-24'>
                <div className='rounded-[32px] border border-[#E8EAF8] bg-[#F8FAFF] p-6 shadow-sm'>
                    <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
                        <div className='max-w-2xl'>
                            <p className='inline-flex rounded-full bg-[#F0F4FF] px-4 py-2 text-[14px] font-semibold text-[#5B63F6]'>Другие работы</p>
                            <h4 className='mt-6 text-[30px] font-semibold text-[#0D111B]'>Больше проектов и активностей на GitHub</h4>
                        </div>
                        <a href='https://github.com/MirZa2121-glitch' target='_blank' rel='noreferrer' className='group inline-flex items-center justify-center gap-3 rounded-[18px] border border-[#DDE3FF] bg-white px-6 py-4 text-sm font-semibold text-[#4D4DFF] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F2F4FF] hover:text-[#3B3BC9]'>
                            Перейти на GitHub
                            <img src={$ICONS.github} alt='GitHub' className='h-5 w-5 transition duration-300 group-hover:scale-110' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}