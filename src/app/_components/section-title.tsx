export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="section-title text-4xl font-bold text-white mb-4 inline-block relative pb-4">
            {children}
            <style jsx>{`
                .section-title::before,
                .section-title::after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    height: 2px;
                    background: linear-gradient(to left, transparent 0%, #d97706 20%);
                    width: 0;
                    transform: translateX(-50%);
                }

                .section-title::before {
                    transform-origin: left center;
                    translate: -4px 0;
                    animation: expand-left 600ms ease-out forwards;
                }

                .section-title::after {
                    transform-origin: right center;
                    translate: 4px 0;
                    background: linear-gradient(to right, transparent 0%, #d97706 20%);
                    animation: expand-right 600ms ease-out forwards;
                    animation-delay: 60ms;
                }

                @keyframes expand-left {
                    from { width: 0; }
                    to { width: 45%; }
                }

                @keyframes expand-right {
                    from { width: 0; }
                    to { width: 45%; }
                }
            `}</style>
        </h2>
    )
}
