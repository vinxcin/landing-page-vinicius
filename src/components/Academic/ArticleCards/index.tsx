import { Button } from "@/components/ui/button"

export default function ArticleCards() {
    const articles = [
        { title: "Educational possibilities of a scientific dissemination activity about black holes", magazine: "EXITUS MAGAZINE", link: "https://portaldeperiodicos.ufopa.edu.br/index.php/revistaexitus/article/view/1647" },
        { title: "Black holes, history of science and physics teaching", magazine: "RBECM MAGAZINE", link: "https://seer.upf.br/index.php/rbecm/article/view/12927" },
        { title: "Didactic possibilities offered by scientific popularization books about black holes", magazine: "SCIENTIATEC", link: "https://periodicos.ifrs.edu.br/index.php/ScientiaTec/article/view/5208" },
        { title: "Emphasizing the interrelations between astrophysics and computing in scientific education activities", magazine: "EFITA", link: "https://www.efita.ita.br/wp-content/uploads/2021/07/LivroResumosXIVEFITA5.pdf#page=68" },
        { title: "The use of technological tools for the dissemination of science on astronomy and computing topics", magazine: "CONICT 2021", link: "https://ocs.ifsp.edu.br/index.php/conict/xiiconict/paper/view/7616/2241" },
        { title: "Existing possibilities for scientific disclosure mediated through the internet", magazine: "SICLN 2021", link: "" },
        { title: "The topic of artificial intelligence inserted in scientific dissemination activities", magazine: "CONICT 2020", link: "https://ocs.ifsp.edu.br/index.php/conict/xiconict/paper/view/6852" },
        { title: "Scientific dissemination activities on the study of artificial intelligence", magazine: "SICLN 2020", link: "https://ocs.ifspcaraguatatuba.edu.br/sicln/x-sicln/paper/viewFile/303/113" },
        { title: "Take the coffee and wait a moment, and take the chance to check out my Lattes CV.", magazine: "Loading...", link: "http://lattes.cnpq.br/9394309062581984"},
    ]

    return ([
        <div className="container mx-auto px-4 py-8">
            <h3 className="mb-6 text-center font-lexend-exa text-4xl font-light tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-white to-primary-primary">
                    Published Articles
                </h3>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="bg-[#00547011] shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 py-10"
                    >
                        <div className="p-4">
                            <h1 className="text-4xl font-inconsolat mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">{article.magazine}</h1>
                            <h2 className="text-2xl font-lexend-exa font-extralight text-gray-300 mb-2">{article.title}</h2>

                            <Button className='flex font-lexend w-full text-2xl h-24 mt-5 border border-primary-primary rounded-xl transition-all duration-500  md:hover:bg-[#002F2F] '>
                                <a target="_blank" className="w-full text-center px-4 py-2" href={article.link}>Read more</a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    ]);
}

