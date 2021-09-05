import React, {  useState } from 'react'
import projectsStyles from '../styles/Projects.module.scss'
import { prefix } from '../utilits/prefix';

const ProjectSlider = ({ projectsData, projectDir }) => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== projectsData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === projectsData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(projectsData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const imgFullScreen = (e) => {
        const prImage = e.target.parentNode.parentNode
        const prImageValue = getComputedStyle(prImage).position

        const sld = e.target.parentNode
        const sldValue = getComputedStyle(sld).position

        if (prImageValue !== 'static') {  
            prImage.style.position = 'static';
            document.querySelector('html').style.scrollbarWidth = 'none'
        } else {
            prImage.style.position = 'relative';
            document.querySelector('html').style.scrollbarWidth = 'auto'
        }

        if (sldValue !== 'fixed') {  
            sld.style.position = 'fixed';
        } else {
            sld.style.position = '';
        }
          
        sld.classList.toggle(`${projectsStyles.activeFullpage}`);
    }

    return (
        <div className={projectsStyles.projectImage}>
        {projectsData.map((obj, index) => {
            return (
                <div
                key={obj.id}
                className={slideIndex === index + 1 ? `${projectsStyles.slide} ${projectsStyles.activeAnim}` : `${projectsStyles.slide}`}
                >
                    <img 
                    src={`${prefix}/${projectDir}/img${index + 1}.png`} alt={`${obj.title}`}
                    onClick={imgFullScreen}
                    />
                </div>
            )
        })}

        <button
        onClick={prevSlide}
        className={`${projectsStyles.btnSlide} ${projectsStyles.prev}`}
        >
        <img src={`${prefix}/svgs/left-arrow.svg`} />
        </button>

        <button
        onClick={nextSlide}
        className={`${projectsStyles.btnSlide} ${projectsStyles.next}`}
        >
        <img src={`${prefix}/svgs/right-arrow.svg`} />
        </button>

        <div className={projectsStyles.containerDots}>
            {Array.from({length: projectsData.length}).map((item, index) => (
                <div key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? `${projectsStyles.dot} ${projectsStyles.active}` : `${projectsStyles.dot}`}
                ></div>
            ))}
        </div>
    </div>
    )
}

export default ProjectSlider
