import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="h-[100vh] sm:h-[90vh] bg-[url('./src/assets/bg-blur.png')] bg-contain bg-top md:bg-right bg-no-repeat md:mx-0">
            <div className="justify-center h-[54vh] md:h-[74vh] flex md:justify-between items-center flex-col md:flex-row">
                <div className="flex flex-col ">
                    <h2 className="text-3xl font-lexend-exa sm:text-4xl font-thin opacity-45 tracking-[0.25em] md:tracking-[0.15em]">Hello, I am Vinicius</h2>

                    <h1 className="text-6xl font-lexend sm:text-7xl font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">
                        Data Engineer
                        <i className="font-light text-6xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-primary-primary to-[#040f1a]"> & </i></h1>
                    <h1 className="text-5xl font-medium font-lexend pb-2 sm:text-7xl md:font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">
                        Front-end Developer</h1>

                    <Button className='flex font-lexend-exa w-full h-24 md:w-5/12 mt-5 bg-primary-primary rounded-lg transition-all duration-500  md:hover:w-6/12'>
                        <a target="_blank" className="w-full text-4xl flex justify-center" href="https://www.linkedin.com/in/vinicius-carvalho-rosa/">Linkedin</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
