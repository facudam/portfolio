import { Technology } from '../../components/technologyImage/Technology'
import { NEXTJS, HTML, CSS, JAVASCRIPT, TYPESCRIPT, GITHUB, GIT, SASS, TAILWIND, REACT } from '../../images'
import './Skills.css'

export const Skills = () => {
    return(
        <section id='skills' className='skills-section'>
            <h2 className='title-font'><span>My </span>Skills</h2>
            <div className='skills-section__technologies'>
                <p><span>SEO </span>(search engine optimization). I optimize websites to be easily found by users and search engines. Some of the SEO tools I work with are:</p>
                <ul>
                    <li>Google analytics</li> 
                    <li>Google search console</li> 
                    <li>Keyword research</li> 
                    <li>SEO on page</li> 
                    <li>Linkbuilding</li>
                </ul>    
            </div>
            <p>Technologies I already work with:</p>
            <div className='skills-section__technologies flex-row'>
                <Technology imageLink={ HTML } alt=' html logo' title='html' />
                <Technology imageLink={ CSS } alt='css logo' title='css'/>
                <Technology imageLink={ JAVASCRIPT } alt='javascript logo' title='javascript'/>
                <Technology imageLink={ REACT } alt='react js logo' title='react'/>
                <Technology imageLink={ GIT } alt='git logo' title='git' />
                <Technology imageLink={ GITHUB } alt='github logo' title='github' />
                <Technology imageLink={ TAILWIND } alt='tailwind logo' title='tailwind' />   
            </div>
            <p>Technologies currently studying:</p>
            <div className='skills-section__technologies flex-row'>
                <Technology imageLink={ TYPESCRIPT } alt='typescript logo' title='typescript' />
                
                <Technology imageLink={NEXTJS} alt='next js logo' title='next.js'/>
                <Technology imageLink={ SASS } alt='sass logo'  title='sass'/>
            </div>
        </section>
    )
}