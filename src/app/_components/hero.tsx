"use client"
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import lucky1 from '../../../public/gallery-2.jpg' // Atualizado para o novo nome
import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-black text-white relative overflow-hidden">
            <div className="relative h-[420px] lg:hidden">
                <Image
                    src={lucky1}
                    alt='lucky1'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60'
                />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-600/20 to-yellow-400/10 mix-blend-screen blur-2xl opacity-70 animate-[pulse_6s_infinite]" />
                    <div className="absolute -top-8 -left-8 w-56 h-56 rounded-full bg-amber-500/30 blur-3xl opacity-60 transform -translate-y-4" />
                    <div className="absolute top-16 right-6 w-40 h-40 rounded-full bg-yellow-400/25 blur-3xl opacity-50" />
                </div>
            </div>

            <div className='container mx-auto pt-32 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6 relative z-10'>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-10 text-white drop-shadow-[0_0_20px_rgba(217,119,6,0.85)]">
                            "Atender bem é transformar clientes em amigos e momentos em memórias."
                        </h1>

                        <p className="lg:text-lg">
                            A excelência em atendimento reflete o compromisso com a qualidade, o respeito e a satisfação do cliente. É o resultado de um serviço realizado com profissionalismo e atenção aos detalhes.
                        </p>

                        <a
                            href="#"
                            className="bg-amber-600 px-4 py-1 rounded-md font-semibold flex items-center gap-3 w-fit ring-2 ring-amber-500/40 hover:scale-105 transition-transform duration-200 hover:bg-amber-700">
                            <WhatsappLogoIcon className='w-6 h-6' />
                            Contato via WhatsApp
                        </a>

                        <p className="text-sm">
                            <span className="bg-amber-600 text-white px-2 py-1 rounded-md">🍹</span> Garanta já o seu bar dos sonhos.
                        </p>
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

                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-600/20 to-yellow-400/10 mix-blend-screen blur-2xl opacity-60 animate-[pulse_6s_infinite]" />
                                <div className="absolute -bottom-8 left-6 w-40 h-40 rounded-full bg-amber-500/30 blur-3xl opacity-60" />
                                <div className="absolute top-6 right-8 w-56 h-56 rounded-full bg-yellow-400/25 blur-3xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
