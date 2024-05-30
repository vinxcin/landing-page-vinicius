import { Navbar, Home, AboutMe, Experience, Knowledge, Project, Academic, Contact, ScrollToTop } from "../../components/index";

function LandingPage() {
    return (
        <main>
            <Navbar />
            <Home />
            <AboutMe />
            <Experience />
            <Knowledge />
            <Project />
            <Academic />
            <Contact />
            <ScrollToTop />
        </main>
    );
}

export default LandingPage;