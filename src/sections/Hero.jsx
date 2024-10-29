import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom.jsx";
import { PerspectiveCamera } from "@react-three/drei";
//import { CanvasLoader } from "../components/CanvasLoader.jsx";
import { Suspense } from "react";
import { Leva, useControls } from "leva";

const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
            step: 0.1, // Ajusta el tamaño del paso según necesites
        },
        positionY: {
            value: 2.5,
            min: -15,
            max: 10,
            step: 0.1,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
            step: 0.1,
        },
        rotationX: {
            value: 2.5,
            min: -Math.PI,
            max: Math.PI*2,
            step: 0.01, // Rango ajustado para rotación en radianes
        },
        rotationY: {
            value: 2.5,
            min: -Math.PI,
            max: Math.PI,
            step: 0.01,
        },
        rotationZ: {
            value: 2.5,
            min: -Math.PI,
            max: Math.PI,
            step: 0.01,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
            step: 0.01,
        },
    });

    
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    ¡Hola! somos Botopia
                    <span className="waving hand">
                        👋
                    </span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Construimos la tecnología que necesitas
                </p>
                <div className="w-full h-full absolute inset-0">
                    <Leva />
                    <Canvas className="w-full h-full">
                        <Suspense fallback={''}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <HackerRoom
                                //scale={0.07}
                                //position={[0, 0, 0]}
                                //rotation={[0, 280, 0]}
                                position={[2, -10, 2]}
                                rotation={[0, -Math.PI, 0]}
                                scale={[0.1, 0.1, 0.1]}
                            />
                            <ambientLight intensity={1} />
                            <directionalLight
                                position={[10, 10, 10]}
                                intensity={0.5}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Hero