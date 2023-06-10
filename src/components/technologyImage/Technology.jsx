import './Technology.css'
export const Technology = ({imageLink, alt, title}) => {

    return (
        <figure
            className="technology-figure">
            <img src={imageLink} alt={alt}  />
            <span
                className='technology-figure__span'
                >{title}</span>  
        </figure>
    )
}
