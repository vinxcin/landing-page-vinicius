import CarouselImages from "./Carousel";
import ArticleCards from "./ArticleCards";

export default function Academic() {

    return (
        <div id="Academic" className="my-[30vh] flex flex-col items-center h-auto mx-6  md:mx-0 ">
            <h1 className="font-inconsolata text-6xl sm:text-7xl font-semibold">Academic Journey</h1>
            <p className="font-lexend-exa tracking-[.20em] text-center font-ligth text-2xl sm:text-2xl text-gray-600 mt-2 mb-16">*click on the image to access the content*</p>
            <h3 className="font-lexend-exa mb-6 md:mb-2 text-2xl md:text-4xl font-light tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-white to-primary-primary">
                Science education in schools
            </h3>
            <CarouselImages />

            <div className="mt-[16vh] md:mt-[30vh]">
                <ArticleCards/>
            </div>
        </div>

    );
}

