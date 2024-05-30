import { Image1, Image2, Image3, Image4, Image5 } from "@/assets"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselImages() {
    const plugin = React.useRef(
        Autoplay(
            { delay: 3000, stopOnInteraction: false, playOnInit: true }

        )
    )

    const images = [
        { name: "image8", scr: Image2, description: "Teacher Ricardo and his advisors in front of the Cynthia Cliquet School", link: "https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho-rosa?ordering=newest&searchphrase=exact&limit=20" },
        { name: "image2", scr: Image2, description: "Teacher Ricardo and his advisors in front of the Cynthia Cliquet School", link: "https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho-rosa?ordering=newest&searchphrase=exact&limit=20" },
        { name: "image0", scr: Image1, description: "Students from the Benedito Carlota School during an Astronomy presentation", link: "https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho-rosa?ordering=newest&searchphrase=exact&limit=20" },
        { name: "image3", scr: Image3, description: "Presentation on Black Holes at the 5th Astronomy Minicourse", link: "https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho-rosa?ordering=newest&searchphrase=exact&limit=20" },
        { name: "image5", scr: Image5, description: "Presentation on black hole and computing at Escola Benedito Carlota", link: "https://www.ifspcaraguatatuba.edu.br/busca/vinicius-carvalho-rosa?ordering=newest&searchphrase=exact&limit=20" },
    ]
    return (
        <div className="w-full max-w-6xl mx-auto flex justify-center items-center mt-12 "> {/* Ajustando o container do carrossel para ficar centralizado */}
            <Carousel
                plugins={[plugin.current]}
                className="w-10/12 md:w-full h-96 flex justify-center items-center " // Ajustando a altura do carrossel
                // onMouseEnter={plugin.current?.stop}
                // onMouseLeave={plugin.current?.reset}
            >
                <CarouselContent className="flex justify-center">
                    {images.map((image, i) => (
                        <CarouselItem key={i} className="sm:hover:scale-110 transition-all duration-500 w-full sm:w-1/1 md:w-1/2 lg:w-2/3 flex-none">
                            <a target="_blank" className="p-2" href={image.link}>
                                <Card className="w-full h-80 opacity-80 rounded-3xl border-none"> {/* Ajustando a largura e altura do Card */}
                                    <img src={image.scr} alt={image.name} className="w-full h-full rounded-t-2xl" /> {/* Ajustando o tamanho da imagem */}
                                </Card>
                                <CardContent className="w-full flex items-center justify-center py-6 bg-[#1423277b] rounded-b-3xl">
                                    <h2 className="text-white font-inconsolata text-center">{image.description}</h2>
                                </CardContent>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
;