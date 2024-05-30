import { Avatar } from './../../assets/index'
import { Button } from "@/components/ui/button"
import { CloudDownload } from 'lucide-react';

import { CV_VINICIUS } from './../../assets/index';


export default function AboutMe() {
    return (
        <div id="Aboutme" className="flex flex-col items-center mx-6 sm:mx-16 lg:mx-0 ">
            <div className="flex flex-col md:flex-row justify-around bg-[#10121565] h-auto w-full rounded-lg border border-[#1F1F1F] shadow-xl shadow-[#31313153] p-10">
                <div className='hidden md:flex justify-center'>
                    <img src={Avatar} className='w-2/6 md:w-full' alt="..." />
                </div>
                <div className='flex flex-col justify-center lg:px-12 w-full'>
                    <h2 className='text-4xl font-lexend-exa font-medium tracking-widest text-primary-primary '>
                        About me
                    </h2>
                    <h1 className='text-4xl sm:text-6xl xl:text-7xl font-inconsolata font-semibold mb-2'>Vinicius Carvalho Rosa</h1>

                    <div className='text-3xl font-lexend font-extralight opacity-60 tracking-wider'>
                        <p className='mb-10'>
                            I hold a degree in Systems Analysis and Development from the Federal
                            Institute of São Paulo. During my academic journey I was a scientific research fellow, contributing to the field by publishing 8 articles in scientific journals, studying the interrelationships between data computing, science education and astronomy.
                        </p>

                        <p className=''>I work as a Data Engineer, with 3 years of experience in the field. However, I also dabble in Front-end Development whenever needed. I'm passionate about delivering top-notch solutions and always eager to lend a hand to the team, whether it's crafting data pipelines or coding for the front-end.</p>
                    </div>
                    <Button className='flex font-lexend w-full h-24 md:w-5/12 lg:w-6/12 xl:w-4/12 2xl:3/12 mt-5 border border-primary-primary rounded-3xl transition-all duration-500  md:hover:bg-[#002F2F] '>
                        <a target="_blank" className="w-full text-4xl flex justify-center font-normal animate-pulse transition-colors" href={CV_VINICIUS}><CloudDownload className='mr-4 ' />Curriculum</a>
                    </Button>
                </div>


            </div>
        </div>

    );
}

