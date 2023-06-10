import { Technology } from '../../components/technologyImage/Technology'
import { NEXTJS } from '../../images/index'
import './Skills.css'

export const Skills = () => {
    return(
        <section id='skills' className='skills-section'>
            <h2><span>My </span>Skills</h2>
            <div className='skills-section__technologies'>
                <p><span>SEO </span>(search engine optimization). I optimize websites to be easily found by users and search engines.</p>
            </div>
            <p>Technologies I already work with:</p>
            <div className='skills-section__technologies'>
                <Technology imageLink='https://icongr.am/devicon/html5-original-wordmark.svg?size=75&color=currentColor' alt=' html logo' title='html' />
                <Technology imageLink='https://icongr.am/devicon/css3-original-wordmark.svg?size=75&color=currentColor' alt='css logo' title='css'/>
                <Technology imageLink='https://icongr.am/devicon/javascript-original.svg?size=75&color=currentColor' alt='javascript logo' title='javascript'/>
                <Technology imageLink='https://icongr.am/devicon/react-original.svg?size=75&color=currentColor' alt='react js logo' title='react'/>
                <Technology imageLink='https://icongr.am/devicon/git-plain.svg?size=75&color=currentColor' alt='git logo' title='git' />
                <Technology imageLink='https://icongr.am/devicon/github-original.svg?size=75&color=currentColor' alt='github logo' title='github' />
                <Technology imageLink='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png' alt='tailwind logo' title='tailwind' />   
            </div>
            <p>Technologies currently studying:</p>
            <div className='skills-section__technologies'>
                <Technology imageLink='https://icongr.am/devicon/typescript-original.svg?size=75&color=currentColor' alt='typescript logo' title='typescript' />
                
                <Technology imageLink={NEXTJS} alt='next js logo' title='next.js'/>
                <Technology imageLink='https://icongr.am/devicon/sass-original.svg?size=62&color=currentColor' alt='sass logo'  title='sass'/>
            </div>
        </section>
    )
}