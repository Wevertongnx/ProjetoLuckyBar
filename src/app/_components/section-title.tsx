export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-white mb-4 pb-6">
                {children}
            </h2>
            {/* Linha esquerda */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-600 to-transparent animate-expandLeft" />
            {/* Linha direita */}
            <div className="absolute bottom-0 right-0 h-0.5 w-0 bg-gradient-to-l from-amber-600 to-transparent animate-expandRight" />
        </div>
    )
}
