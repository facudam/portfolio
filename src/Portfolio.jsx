import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { About } from "./sections/about/About"
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
        </>
    )
}