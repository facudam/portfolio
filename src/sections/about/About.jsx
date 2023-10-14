import './About.css'
import { WEBDEV }  from '../../images/index'

export const About = ({ about }) => {
    return(
        <section className='about-section' id='about'>
            <h2 className='title-font'><span>{ about.title[0] } </span>{ about.title[1] }</h2>
            <div className='paragraph-ctn'>
                <img src={ WEBDEV } alt='web development' />
                <div className='about-section__texts'>
                    <h3>{ about.subtitle }</h3>
                    <p>{ about.storyDescription[0] }</p>
                    <p>{ about.storyDescription[1] }</p>
                    <p> { about.storyDescription[2] }</p>
                    <p>{ about.storyDescription[3] }</p>
                </div>
            </div> 
        </section>
    )
}