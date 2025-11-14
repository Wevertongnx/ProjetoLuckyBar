"use client"
import { Martini, Users, Trophy, Clock } from '@phosphor-icons/react'

export function About() {
    return (
        <section className="bg-zinc-900 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">
                            Sobre o <span className="text-amber-500">Lucky Bar</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Transformamos eventos em experiências memoráveis. Com anos de expertise em bar service, 
                            oferecemos atendimento de excelência e drinks personalizados para tornar sua celebração única.
                        </p>
                        <p className="text-gray-400">
                            Nossa equipe especializada garante qualidade, profissionalismo e um toque especial 
                            que só o Lucky Bar pode proporcionar.
                        </p>
                    </div>

                    {/* Cards de estatísticas */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black p-6 rounded-lg shadow-xl border border-amber-900/30 hover:border-amber-600/50 transition-all">
                            <Users className="w-12 h-12 text-amber-500 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-white">500+</h3>
                            <p className="text-gray-400">Eventos Realizados</p>
                        </div>

                        <div className="bg-black p-6 rounded-lg shadow-xl border border-amber-900/30 hover:border-amber-600/50 transition-all">
                            <Trophy className="w-12 h-12 text-amber-500 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-white">100%</h3>
                            <p className="text-gray-400">Satisfação</p>
                        </div>

                        <div className="bg-black p-6 rounded-lg shadow-xl border border-amber-900/30 hover:border-amber-600/50 transition-all">
                            <Martini className="w-12 h-12 text-amber-500 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-white">50+</h3>
                            <p className="text-gray-400">Drinks Premium</p>
                        </div>

                        <div className="bg-black p-6 rounded-lg shadow-xl border border-amber-900/30 hover:border-amber-600/50 transition-all">
                            <Clock className="w-12 h-12 text-amber-500 mb-4" weight="duotone" />
                            <h3 className="text-3xl font-bold text-white">5+</h3>
                            <p className="text-gray-400">Anos de Experiência</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}