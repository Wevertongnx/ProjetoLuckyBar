"use client"
import { Champagne, Confetti, Heart, Cake } from '@phosphor-icons/react'

export function Services() {
    const services = [
        {
            icon: Champagne,
            title: "Casamentos",
            description: "Bar personalizado para o dia mais especial da sua vida"
        },
        {
            icon: Confetti,
            title: "Festas & Eventos",
            description: "Animação e drinks de qualidade para qualquer celebração"
        },
        {
            icon: Heart,
            title: "Eventos Corporativos",
            description: "Profissionalismo e elegância para seus eventos empresariais"
        },
        {
            icon: Cake,
            title: "Aniversários",
            description: "Comemore com estilo e drinks incríveis"
        }
    ]

    return (
        <section id="servicos" className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Nossos <span className="text-amber-500">Serviços</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Oferecemos soluções completas para diversos tipos de eventos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-amber-900/30 hover:border-amber-600/50"
                        >
                            <service.icon
                                className="w-12 h-12 mb-4 text-amber-500"
                                weight="duotone"
                            />
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
