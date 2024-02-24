import { ProjectComponent } from '../../components/projectComponent/ProjectComponent'
import { MELI, TYPING, FICHAS, DIVSCREATOR, COURSESLIBRA } from '../../images/index'
import './Projects.css'

export const Projects = ({ projects }) => {
    return(
        <section className='projects' id='projects'>
            <h2 className='title-font'>{ projects.title[0] } <span>{ projects.title[1] }</span></h2>
            <ProjectComponent
                imageSRC={ COURSESLIBRA }
                alt='CoursesLibra platform'
                title={ projects.coursesLibra.title }
                description={ projects.coursesLibra.description }
                technologies={['ReactJS', 'TypeScript', 'NodeJS', 'Express', 'MySQL', 'CSS', 'Axios']}
                gitLINK='https://github.com/facudam/fullstack-courses-app'
                buttons={ projects.buttons }
            />
            <ProjectComponent 
                imageSRC={ MELI } 
                alt='mercado libre clone' 
                title={ projects.meliProject.title }
                description={ projects.meliProject.description }
                technologies={['CSS','React', 'Context', 'UseReducer', 'SwipperJs']} 
                gitLINK='https://github.com/facudam/mercado-libre-app'
                projectLINK='https://e-commerce-libre.vercel.app/'
                buttons={ projects.buttons }
            />
            <ProjectComponent 
                imageSRC={ TYPING }
                alt='Typing speed game'
                title={ projects.typingProject.title }
                description={ projects.typingProject.description }
                technologies={['CSS', 'React', 'Context', 'LocalStorage']}
                gitLINK='https://github.com/facudam/typing-speed-game'
                projectLINK='https://typing-speed-game1.vercel.app/'
                buttons={ projects.buttons }
            />
            <ProjectComponent 
                imageSRC={ FICHAS }
                alt='Fichas medicas app'
                title={ projects.fichasProject.title }
                description={ projects.fichasProject.description }
                technologies={['CSS', 'React', 'Context', 'useReducer']}
                gitLINK='https://github.com/facudam/fichas-medicas-app'
                projectLINK='https://fichas-medicas-app.vercel.app/'
                buttons={ projects.buttons }
            />
            <ProjectComponent
                imageSRC={ DIVSCREATOR }
                alt='Divs Creator app'
                title={ projects.divsProject.title }
                description={ projects.divsProject.description }
                technologies={['HTML', 'CSS', 'JavaScript']}
                gitLINK='https://github.com/facudam/divs-creator'
                projectLINK='https://divs-creator.vercel.app/'
                buttons={ projects.buttons }
            />
        </section>
    )
}