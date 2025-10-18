"use client"
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import lucky1 from '../../../public/lucky1.jpg'
import luckybar3 from '../..//../public/luckybar3.jpg'
import Image from 'next/image'
export function Hero() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            {/* Ajustado: garantir altura no wrapper da imagem mobile para o Image fill não quebrar */}
            <div className="relative h-[420px] lg:hidden">
                <Image
                    src={lucky1}
                    alt='lucky1'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60'
                />
                {/* overlay neon */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-600/20 to-cyan-400/10 mix-blend-screen blur-2xl opacity-70 animate-[pulse_6s_infinite]" />
                    <div className="absolute -top-8 -left-8 w-56 h-56 rounded-full bg-pink-500/30 blur-3xl opacity-60 transform -translate-y-4" />
                    <div className="absolute top-16 right-6 w-40 h-40 rounded-full bg-cyan-400/25 blur-3xl opacity-50" />
                </div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-10 text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.85)]">
                            “Atender bem é transformar clientes em amigos e momentos em memórias.”
                        </h1>

                        <p className="lg:text-lg">
                            A excelência em atendimento reflete o compromisso com a qualidade, o respeito e a satisfação do cliente. É o resultado de um serviço realizado com profissionalismo e atenção aos detalhes.
                        </p>


                        <a
                            href="#"
                            className="bg-green-500 px-4 py-1 rounded-md font-semibold flex items-center justify-start gap-3 w-fit ring-2 ring-green-400/40 hover:scale-105 transition-transform duration-200">
                            <WhatsappLogoIcon className='w-6 h-6' />
                            Contato via WhatsApp
                        </a>


                        <div className="mt-8 ">
                            <p className="text-sm mb-4">
                                <b className="bg-white text-white px-2 py-2 rounded-md">🍹</b> Garanta já o seu bar dos sonhos.
                            </p>
                            <div>
                                <div>
                                    <Image 
                                    src={luckybar3}       
                                    alt='luckybar3'      
                                    quality={100}       
                                    className='object-fill'
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='hidden md:block relative -mt-16'>
                        <div className="relative w-full h-[420px] lg:h-[560px]">
                            <Image
                                src={lucky1}
                                alt='logo luckybar'
                                fill
                                className='object-contain'
                                sizes='(max-width: 768px) 0vw, 50vw'
                            />

                            {/* neon overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-600/20 to-cyan-400/10 mix-blend-screen blur-2xl opacity-60 animate-[pulse_6s_infinite]" />
                                <div className="absolute -bottom-8 left-6 w-40 h-40 rounded-full bg-pink-500/30 blur-3xl opacity-60" />
                                <div className="absolute top-6 right-8 w-56 h-56 rounded-full bg-cyan-400/25 blur-3xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}