import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { About } from "./sections/about/About"
import { Contact } from "./sections/contact/Contact"
import { Projects } from "./sections/projects/Projects"
import { Skills } from "./sections/skills/Skills"
import { useState } from "react"
import { ENGLISH } from "./languages"

export const Portfolio = () => {

    const [ language, setLanguage ] = useState(ENGLISH)

    const { header, projects, skills, about, contact, footer } = language;

    return(
        <>
            <Nav 
                nav={ header.nav } 
                setLanguage={ setLanguage }
            />
            <Header header={ header } language={ language }/>
            <main>
              <Projects projects={ projects }/> 
            </main>
            <Skills skills={ skills }/>
            <About about={ about }/>
            <Contact contact={ contact } />
            <Footer footer={ footer }/>
        </>
    )
}