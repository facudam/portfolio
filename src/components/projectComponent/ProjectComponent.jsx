import './ProjectComponent.css'

export const ProjectComponent = ({ imageSRC, alt, title, description, technologies, gitLINK, projectLINK }) => {
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
                        <img src='https://icongr.am/devicon/github-original.svg?size=59&color=currentColor' alt='github' title='code'/>
                    </a>
                    <a href={ projectLINK } target='_blank' rel='noopener noreferrer'>
                        <img src='https://icongr.am/fontawesome/eye.svg?size=59&color=currentColor' alt='eye' title='live demo'/>
                    </a>
                </div>
            </div>
            
        </article>
    )
}