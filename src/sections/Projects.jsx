return (
    <section className="c-space my-20">
        <p className="head-text">Mi obra seleccionada</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl" style={{ height: '300px', width: '100%' }}>
                    <img
                        src={currentProject.spotlight}
                        alt="destacar"
                        className="w-full h-full object-cover"
                    />
                </div>

                {currentProject.logo && (
                    <div
                        className="p-5 backdrop-filter backdrop-blur-3xl w-fit rounded-lg overflow-hidden mx-auto"
                        style={{ ...currentProject.logoStyle, display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            className="w-[70px] h-[70px] object-contain"
                            src={currentProject.logo}
                            alt="logo"
                        />
                    </div>
                )}

                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>

                {currentProject.href && (
                    <a
                        className="flex items-center gap-2 cursor-pointer text-white-600 mt-5"
                        href={currentProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>Verificar sitio en vivo</p>
                        <img src="/assets/arrow-up.png" alt="arrow" className="w-2 h-2" />
                    </a>
                )}

                <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                        <img src="/assets/left-arrow.png" alt="left arrow" />
                    </button>
                    <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center relative">
                {currentProject.images && currentProject.images.length > 0 ? (
                    <img
                        src={currentProject.images[0]}
                        alt="Foto del proyecto"
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <p>Imagen no disponible</p>
                )}
            </div>
        </div>
    </section>
);
