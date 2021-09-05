import React from 'react'
import ProjectSlider from './ProjectSlider'
import projectsStyles from '../styles/Projects.module.scss'
import imagesData from '../utilits/imagesData'
import imagesData2 from '../utilits/imagesData2'


const Projects = () => {

    return (
        <div className={projectsStyles.projectsContainer} id="projects">
            <div className={projectsStyles.projectsBG}>
                <div className={projectsStyles.projectsWrapper}>
                    <div className={projectsStyles.projectsTitle}>
                        <h1>Recent Projects</h1>
                    </div>
                    <div className={projectsStyles.projectContainer}>
                        <div className={projectsStyles.projectWrapper}>
                            <div className={projectsStyles.projectDescription}>
                                <h1>Point Of Sale Web App</h1>
                                <p className={projectsStyles.projectP}>
                                    A web app that lets its users manage products of their store 
                                    with a simple to use UI. User can add new products, 
                                    make sales, and show various statistics about its sales.
                                </p>
                                <p className={projectsStyles.projectTech}>HTML, CSS, Javascript, Ajax, Local Storage, Node JS, MySQL</p>
                            </div>

                            {/* <ProjectSlider projectsData={imagesData} projectDir={'project1'} /> */}
                        </div>
                    </div>
                    <div className={projectsStyles.projectContainer}>
                        <div className={projectsStyles.projectWrapper}>
                            <div className={projectsStyles.projectDescription}>
                                <h1>Create and Discover Events Web App</h1>
                                <p className={projectsStyles.projectP}>
                                    Web app for creating Events or discovering events near you.
                                </p>
                                <p className={projectsStyles.projectTech}>HTML, SASS, React JS, JWT, Node JS, Mongo DB</p>
                            </div>

                            {/* <ProjectSlider projectsData={imagesData2} projectDir={'project2'} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
