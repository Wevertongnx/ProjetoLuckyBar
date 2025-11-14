"use client"
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Carta de Drinks', href: '#drinks' },
        { label: 'Contatos', href: '#contatos' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/20">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors">
                        Lucky Bar
                    </a>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Botão Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-amber-500 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <ul className="md:hidden mt-4 space-y-4 pb-4">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-300 hover:text-amber-500 transition-colors text-sm font-medium"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    )
}
