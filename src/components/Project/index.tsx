import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BG_STARS, Rep } from "@/assets";

export default function Project() {
    const cards = [
        {
            name: "CertiPy",
            description: "Project developed in Python that automates the generation and sending of certificates. I used Qt Designer, Python and Canva.",
            image: "https://user-images.githubusercontent.com/87454265/150715276-d1ac1e33-f2a3-4472-8c38-40ffccc8544a.png",
            link: "https://github.com/vinxcin/CertiPy",
            color: "border-[#00FF29]"
        },
        {
            name: "LP República",
            description: "Landing Page developed for the University House where I lived. I used React JS, Tailwind, and TypeScript.",
            image: Rep,
            link: "https://github.com/vinxcin/landing_page_republica",
            color: "border-[#660303]"
        },
    ];
    return (
        <div id="Project" className="flex flex-col items-center bg-contain bg-center bg-no-repeat mt-80 mx-6 md:mx-0" style={{ backgroundImage: `url(${BG_STARS})` }}>
            <h1 className="font-inconsolata text-6xl sm:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">Personal Projects</h1>
            <div className="flex flex-wrap justify-center gap-20 sm:gap-28 mt-14">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`sm:w-4/6 sm:h-[50vh] xl:w-[28vw] xl:h-[44vh] flex flex-col pb-10 bg-[#1111119c] text-white p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#2d2d2d3f]
                        `}>

                        <div className="mt-4">
                            <div className="flex flex-col justify-center items-center ">
                                <img
                                    src={card.image}
                                    alt={card.name}
                                    className={`${card.name === "LP República"
                                        ? "w-1/12 h-1/6 object-contain my-4 mx-auto"
                                        : "w-6/12 h-2/6 object-contain"
                                        } rounded-t-lg `}
                                />
                                <h3 className="font-inconsolata flex items-center text-6xl font-medium">{card.name}</h3>

                            </div>
                            <Separator className="bg-slate-800 opacity-50 my-6 " />
                            <p className="font-lexend-exa mt-2 mb-5 text-2xl font-light text-gray-300">{card.description}</p>
                        </div>
                        <Button className={`flex font-lexend-exa font-extralight w-full h-24 mt-8 border my-auto ${card.color}  rounded-sm animate-pulse transition-colors hover:bg-zinc-900 hover:animate-none `}>
                            <a target="_blank" className="w-full text-3xl flex justify-center" href={card.link}>View Project</a>
                        </Button>
                    </div>
                ))}
            </div>
        </div>

    );
}

