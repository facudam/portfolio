import { Technology } from '../../components/technologyImage/Technology'
import { NEXTJS, HTML, CSS, JAVASCRIPT, TYPESCRIPT, GITHUB, GIT, SASS, TAILWIND, REACT, NODE, SQL } from '../../images'
import './Skills.css'

export const Skills = ({ skills }) => {
    return(
        <section id='skills' className='skills-section'>
            <h2 className='title-font'><span>{ skills.title[0] } </span>{ skills.title[1] }</h2>
            <div className='skills-section__technologies'>
                <p><span>SEO </span>{ skills.description }</p>
                <ul>
                    <li>Google analytics</li> 
                    <li>Google search console</li> 
                    <li>Keyword research</li> 
                    <li>SEO on page</li> 
                    <li>Linkbuilding</li>
                </ul>    
            </div>
            <p>{ skills.firstSubtitle }</p>
            <div className='skills-section__technologies flex-row'>
                <Technology imageLink={ HTML } alt=' html logo' title='html' />
                <Technology imageLink={ CSS } alt='css logo' title='css'/>
                <Technology imageLink={ JAVASCRIPT } alt='javascript logo' title='javascript'/>
                <Technology imageLink={ REACT } alt='react js logo' title='react'/>
                <Technology imageLink={ GIT } alt='git logo' title='git' />
                <Technology imageLink={ GITHUB } alt='github logo' title='github' />
                <Technology imageLink={ TAILWIND } alt='tailwind logo' title='tailwind' />
                <Technology imageLink={ TYPESCRIPT } alt='typescript logo' title='typescript' />   
            </div>
            <p>{ skills.secondSubtitle }</p>
            <div className='skills-section__technologies flex-row'>
                
                <Technology imageLink={NEXTJS} alt='next js logo' title='next.js'/>
                <Technology imageLink={ SASS } alt='sass logo'  title='sass'/>
                <Technology imageLink={ NODE } alt='NodeJS logo' title='nodejs' />
                <Technology imageLink={ SQL } alt='SQL logo' title='sql' />
            </div>
        </section>
    )
}