import { GITHUB, EYE } from '../../images'
import './ProjectComponent.css'

export const ProjectComponent = ({ imageSRC, alt, title, description, technologies, gitLINK, projectLINK, buttons }) => {
    return(
        <article className='project-component'>
            <div className='project-img-ctn'>
                <img src={ imageSRC } alt={ alt }/>
            </div>
            <div className='project-info'>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <div className='technologies-ctn'>
                    {
                        technologies.map((language, index) => (
                            <div key={index} className='technology'>
                                <span>{ language }</span>
                            </div>
                        ))
                    }
                </div>
                <div className='technologies-links'>
                    <a href={ gitLINK } target='_blank' rel='noopener noreferrer'>
                        <img src={ GITHUB } alt='github' title={ buttons[0]}/>
                    </a>
                    <a href={ projectLINK } target='_blank' rel='noopener noreferrer'>
                        <img src={ EYE } alt='eye' title={ buttons[1] }/>
                    </a>
                </div>
            </div>
            
        </article>
    )
}