
import { Spain, English } from './../../assets/index'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function GoogleTranslate() {
    const langs = [{ id: 'en', name: 'English', src: English }, { id: "es", name: 'Spain', src: Spain }];
    return (
        <Select>
            <SelectTrigger className="w-[8vw] h-auto border-none items-center justify-center animate-pulse ">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className=' items-center justify-center bg-[#111111ac] border-none'>
                <SelectGroup>
                    <SelectLabel className='font-lexend-exa text-xl font-extralight text-slate-50 mx-10'>Select an Language</SelectLabel>
                    {langs.map((lang, i) => (
                        <SelectItem value={lang.id} className='hover:scale-100 transition-all duration-500 cursor-pointer text-green-400 text-xl items-center justify-center'>
                            <img
                                className="max-w-none mx-6 my-2 hover:scale-110 transition-all duration-500 "
                                key={i}
                                src={lang.src}
                                alt={lang.name}
                            />
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
