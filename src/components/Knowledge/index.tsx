import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Knowledge() {
    const knowledges = [
        { name: "Python", link: "https://img.icons8.com/?size=60&id=12584&format=png&color=18C9CAE3" },
        { name: "Docker", link: "https://img.icons8.com/?size=60&id=22797&format=png&color=18C9CAE3" },
        { name: "Microsoft Azure", link: "https://img.icons8.com/?size=60&id=VLKafOkk3sBX&format=png&color=18C9CAE3" },
        { name: "SQL", link: "https://img.icons8.com/?size=60&id=ywH6EJgZ7sm5&format=png&color=18C9CAE3" },
        { name: "Databricks", link: "https://asset.brandfetch.io/idSUrLOWbH/idIDtj7hqp.png" },
        { name: "Apache Spark", link: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" },
        { name: "Data factory", link: "https://symbols.getvecta.com/stencil_28/27_data-factory.8004c08598.svg" },
        { name: "Synapse Analytics", link: "https://img.icons8.com/?size=60&id=dT0AFd2fHWqw&format=png&color=18C9CAE3" },
        { name: "Azure Data Lake Storage", link: "https://www.azure.cn/Images/marketing-resource/css/storage-date-lake-storage.svg" },
        { name: "Typescript", link: "https://img.icons8.com/?size=60&id=vMqgHSToxrJR&format=png&color=18C9CAE3" },
        { name: "React Js", link: "https://img.icons8.com/?size=60&id=0Da6k7SMq0hs&format=png&color=18C9CAE3" },
        { name: "Tailwind CSS", link: "https://img.icons8.com/?size=60&id=997y4SZQkDuP&format=png&color=18C9CAE3" },
    ]

    return (
        <div id="Knowledge" className="flex flex-col items-center mx-6">
            <h1 className="font-inconsolata font-semibold text-7xl">Knowledge</h1>
            <p className="font-lexend-exa tracking-[.20em] text-center font-ligth text-2xl sm:text-3xl text-gray-600 mt-2 mb-10">*hover over the card to read*</p>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4 md:gap-8 lg:gap-12 ">
                {knowledges.map((knowledge) => (
                    <HoverCard key={knowledge.name}>
                        <HoverCardTrigger className="cursor-pointer">
                            <section className="flex items-center justify-center w-[38vw] h-[20vh] sm:w-[14vw] sm:h-[20vh] md:w-[16vw] md:h-[20vh] lg:w-[10vw] lg:h-[18vh] xl:w-[8vw] xl:h-[16vh] bg-[#101215] border border-[#1F1F1F] rounded-lg hover:border-primary-primary transition-all duration-500">
                                <img src={knowledge.link} alt={knowledge.name} style={{ width: '60px', height: '60px' }} />
                            </section>
                        </HoverCardTrigger>
                        <HoverCardContent className="font-lexend-exa tracking-wider text-center text-gray-100 bg-[#101a29] border-none">
                            {knowledge.name}
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>

        </div>

    );
}

