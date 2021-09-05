import React, { useEffect, useState, useRef } from 'react'
import aboutStyles from '../styles/About.module.scss'
import { prefix } from '../utilits/prefix';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const column1 = useRef(null);
    const column2 = useRef(null);

    useEffect(() => {
        const element = column1.current;

        gsap.from(element, {
            scrollTrigger: {
                trigger: '.transition2',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

        const element2 = column2.current;

        gsap.from(element2, {
            scrollTrigger: {
                trigger: '.transition2',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })
    }, [])

    return (
        <div className={aboutStyles.aboutContainer} id="about">
            <div className={aboutStyles.aboutWrapper}>
                <div className={aboutStyles.aboutTitle}>
                    <h1>About Me</h1>
                    <p className={aboutStyles.aboutDesc}>
                        Web Developer with a passion for programming, solving problems and coming up with creative solutions.
                        Passionate about learning new technologies and keeping up with the latest trends.
                        I like to code things from stratch, and enjoy bringing ideas to life inside the browser.
                    </p>
                </div>
                <div className="skillCategories">
                    <div className="UI_UX">

                    </div>
                    <div className="frontend">

                    </div>
                    <div className="backend">

                    </div>
                </div>
                <div className={aboutStyles.aboutSkills}>
                    <div className={aboutStyles.skillsTitle}>
                        <h1>Technologies I Use</h1>
                    </div>
                    <div className={aboutStyles.skillsContainer}>
                        <div ref={column1} className={`${aboutStyles.skillsColumn} transition2`}>
                            <div className={aboutStyles.skillsBG}>
                                <div className={aboutStyles.skillsImgContainer}>
                                    <img className={aboutStyles.skillsImg} src={`${prefix}/front-end.png`} alt="front-end_image" />
                                </div>
                                <div className={aboutStyles.skillsList}>
                                    <p>Javascript</p>
                                    <p>React JS</p>
                                    <p>HTML/CSS</p>
                                    <p>Bootstrap</p>
                                    <p>Material UI</p>
                                </div>
                            </div>
                        </div>
                        <div ref={column2} className={`${aboutStyles.skillsColumn} transition2`}>
                            <div className={aboutStyles.skillsBG}>
                                <div className={aboutStyles.skillsImgContainer}>
                                    <img className={aboutStyles.skillsImg} src={`${prefix}/back-end.png`} alt="back-end_image" />
                                </div>
                                <div className={aboutStyles.skillsList}>
                                    <p>Node Js</p>
                                    <p>Express Js</p>
                                    <p>MongoDB</p>
                                    <p>MySQL</p>
                                    <p>PostgresSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
