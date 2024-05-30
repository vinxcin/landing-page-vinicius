import { Separator } from "@/components/ui/separator"
import { Linkedin, Github, Youtube } from 'lucide-react';

export default function Contact() {
    const icons = [
        { name: "Linkedin", src: Linkedin, link: "https://www.linkedin.com/in/vinicius-carvalho-rosa/" },
        { name: "Github", src: Github, link: "https://github.com/vinxcin" },
        { name: "Youtube", src: Youtube, link: "https://www.youtube.com/c/UmaDosedeCi%C3%AAncia" },
    ]
    return (
        <div id="Contact" className="flex flex-col h-auto mx-6 md:mx-0">
            <h1 className="font-inconsolata font-semibold text-7xl mb-6">Contact<strong className="text-primary-primary">.</strong></h1>
            <div className="flex justify-between flex-col-reverse sm:flex-row sm:items-baseline mb-4 flex-wrap">
                <div className="flex w-4/12 sm:w-2/12 justify-between text-purple-400 my-8 sm:my-0">
                    <a href="https://www.linkedin.com/in/vinicius-carvalho-rosa/" target="_blank" rel="noopener noreferrer"
                        aria-label="Linkedin">
                        <Linkedin size={32} strokeWidth={1} className="cursor-pointer hover:scale-125 transition-all duration-500"/>
                    </a>
                    <a href="https://github.com/vinxcin" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub">
                        <Github size={32} strokeWidth={1} className="cursor-pointer hover:scale-125 transition-all duration-500"/>
                    </a>
                    <a href="https://www.youtube.com/c/UmaDosedeCi%C3%AAncia" target="_blank" rel="noopener noreferrer"
                        aria-label="Youtube">
                        <Youtube size={32} strokeWidth={1} className="cursor-pointer hover:scale-125 transition-all duration-500"/>
                    </a>
                </div>
                <p className="font-lexend-exa font-extralight">viniciusrosadev@outlook.com</p>
            </div>
            <Separator className="opacity-30 " />
            <div className="flex justify-between items-center my-6">
                <h1 className="font-lexend-exa font-light text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-white to-primary-primary">Made by Vinicius Carvalho Rosa</h1>
                <p className="font-lexend-exa font-extralight text-xl sm:text-2xl">©2024</p>

            </div>
        </div>

    );
}

