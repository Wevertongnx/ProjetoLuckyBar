"use client"
import Image from 'next/image'
import { useState } from 'react'
import { X } from '@phosphor-icons/react'

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const images = [
        { src: '/gallery/gallery-1.jpg', alt: 'Lucky Bar - Evento 1' },
        { src: '/gallery/gallery-2.jpg', alt: 'Lucky Bar - Evento 2' },
        { src: '/gallery/gallery-3.jpg', alt: 'Lucky Bar - Evento 3' },
        { src: '/gallery/gallery-4.jpg', alt: 'Lucky Bar - Evento 4' },
        { src: '/gallery/gallery-5.jpg', alt: 'Lucky Bar - Evento 5' },
        { src: '/gallery/gallery-6.jpg', alt: 'Lucky Bar - Evento 6' },
    ]

    return (
        <section className="bg-zinc-900 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Nossa <span className="text-amber-500">Galeria</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Confira alguns dos eventos que já realizamos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold">Ver imagem</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de imagem ampliada */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" weight="bold" />
                    </button>
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
