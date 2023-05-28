import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { About } from "./sections/about/About"
import { Contact } from "./sections/contact/Contact"
import { Projects } from "./sections/projects/Projects"
import { Skills } from "./sections/skills/Skills"



export const Portfolio = () => {
    return(
        <>
            <Nav />
            <Header />
            <main>
              <Projects /> 
            </main>
            <Skills />
            <About />
            <Contact />
            <Footer />
        </>
    )
}