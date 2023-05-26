import { ProjectComponent } from '../../components/projectComponent/ProjectComponent'
import MELI from '../../images/meliclon.jpg'
import './Projects.css'

export const Projects = () => {
    return(
        <section className='projects'>
            <h2>My <span>Projects</span></h2>
            <p>A list of personal projects to action my skills.</p>
            <ProjectComponent 
                imageSRC={ MELI } 
                alt='mercado libre clone' 
                title='Mercado Libre'
                description='A clone of the popular e-commerce platform. It includes interactivity and queries to its API. Shopping cart and extra product comparison functionality.'
                technologies={['CSS','React', 'Context', 'UseReducer']} 
                gitLINK='https://github.com/facudam/mercado-libre-app'
                projectLINK='https://meliclon.netlify.app/'
            />
        </section>
    )
}