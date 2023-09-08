import { ProjectComponent } from '../../components/projectComponent/ProjectComponent'
import { MELI, TYPING, FICHAS } from '../../images/index'
import './Projects.css'

export const Projects = () => {
    return(
        <section className='projects' id='projects'>
            <h2 className='title-font'>My <span>Projects</span></h2>
            <ProjectComponent 
                imageSRC={ MELI } 
                alt='mercado libre clone' 
                title='Mercado Libre'
                description='A clone of the popular e-commerce platform. It includes interactivity and queries to its API. Shopping cart and an extra product comparison functionality for desktop.'
                technologies={['CSS','React', 'Context', 'UseReducer', 'SwipperJs']} 
                gitLINK='https://github.com/facudam/mercado-libre-app'
                projectLINK='https://meliclon.netlify.app/'
            />
            <ProjectComponent 
                imageSRC={ TYPING }
                alt='Typing speed game'
                title='Typing Speed Game'
                description='An online game for desktop designed to enhance your typing skills and speed, tracking your progress and having fun trying to break your own record.'
                technologies={['CSS', 'React', 'Context', 'LocalStorage']}
                gitLINK='https://github.com/facudam/typing-speed-game'
                projectLINK='https://typing-speed-game-1.netlify.app/'
            />
            <ProjectComponent 
                imageSRC={ FICHAS }
                alt='Fichas medicas app'
                title='Fichas medicas app'
                description='A CRUD web app that allows for patient registration, adding medical consultations, and keeping medical records up to date.'
                technologies={['CSS', 'React', 'Context', 'useReducer']}
                gitLINK='https://github.com/facudam/fichas-medicas-app'
                projectLINK='https://fichasmedicas.netlify.app/'
            />
        </section>
    )
}