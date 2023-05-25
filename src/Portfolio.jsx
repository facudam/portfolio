import { Header } from "./components/Header/Header"
import { Nav } from "./components/Nav/Nav"
import { Projects } from "./sections/projects/Projects"



export const Portfolio = () => {
    return(
        <>
            <Nav />
            <Header />
            <main>
              <Projects /> 
            </main>  
        </>
    )
}