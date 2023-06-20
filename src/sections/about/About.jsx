import './About.css'
import { WEBDEV }  from '../../images/index'

export const About = () => {
    return(
        <section className='about-section' id='about'>
            <h2><span>About </span>me</h2>
            <div className='paragraph-ctn'>
                <img src={ WEBDEV } alt='web development' />
                <div className='about-section__texts'>
                    <h3>How I start programming</h3>
                    <p>Before diving into the world of programming, I was fascinated by search engine optimization (SEO) and its impact on website visibility and user engagement. I learned the ins and outs of optimizing websites for search engines and achieved excellent results while applying it to personal websites.</p>
                    <p>The SEO was the starting point for me to delve into the world of web programming.</p>
                    <p> Currently, I am pursuing my programming education at college while also being a self-taught learner. I thrive on continuously expanding my skill set and staying up to date with the latest industry trends.</p>
                    <p>I am thrilled to apply my programming and SEO skills in a professional setting and would be delighted to contribute as part of your team!</p>
                </div>
                
            </div>
            
        </section>
    )
}