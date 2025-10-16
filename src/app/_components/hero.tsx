export function Hero() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            <article>
                <div>
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-10">
                        “Atender bem é transformar clientes em amigos e momentos em memórias.”
                    </h1>

                    <p className="lg:text-lg">
                        A excelência em atendimento reflete o compromisso com a qualidade, o respeito e a satisfação do cliente. É o resultado de um serviço realizado com profissionalismo e atenção aos detalhes.
                    </p>

                    <div>
                        <a 
                        href="#"
                        className="bg-green-500 px-5 py-1 rounded-md font-semibold flex items-center  justify-center w-fit">
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div className="mt-8 ">
                        <p className="text-sm mb-4">
                            <b className="bg-white text-white px-2 py-1 rounded-md">🍹</b> Garanta já o seu bar dos sonhos.
                        </p>
                    </div>

                </div>
            </article>

        </section>
    )
}