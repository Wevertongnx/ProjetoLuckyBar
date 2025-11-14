"use client"
import { InstagramLogo, WhatsappLogo, MapPin, Envelope } from '@phosphor-icons/react'

export function Footer() {
    return (
        <footer id="contatos" className="bg-zinc-950 text-white py-12 border-t border-amber-900/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-amber-500">Lucky Bar</h3>
                        <p className="text-gray-400">
                            Transformando eventos em experiências memoráveis desde 2019.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                                <WhatsappLogo className="w-5 h-5" />
                                <span>(11) 99999-9999</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors">
                                <Envelope className="w-5 h-5" />
                                <span>contato@luckybar.com</span>
                            </a>
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span>Campo Grande, MS</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-colors">
                                <InstagramLogo className="w-6 h-6" weight="fill" />
                            </a>
                            <a href="#" className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-colors">
                                <WhatsappLogo className="w-6 h-6" weight="fill" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-amber-900/20 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Lucky Bar. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
