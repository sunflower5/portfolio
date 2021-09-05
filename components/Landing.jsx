import React, { useEffect, useState, useRef } from 'react'
import landingStyles from '../styles/Landing.module.scss'
import { prefix } from '../utilits/prefix';

import Nav from '../components/Nav'

function useOnScreen(options) {
    const ref = useRef()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, options)

        if(ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        }

    },[ref, visible])

    return [ref, visible]
}

const Landing = () => {

    const [ref, visible] = useOnScreen({rootMargin: "-44px 0px 0px 0px"})

    return (
        <>
        {visible ? (
            <Nav navActv={false} />
        ) : (
            <Nav navActv={true} />
        )}
        <div className={landingStyles.landing} id="landing">
            <div className={landingStyles.row}>
                <div className={landingStyles.hello}>
                    <div className={landingStyles.helloName}>Hello<span className={landingStyles.wavingHand}> 👋</span>, my name is Lorik.</div>
                </div>
                <div className={landingStyles.imgLogo} ref={ref}>
                    <img src={`${prefix}/computer-img.svg`} alt="computer_image" />
                </div>
                <div className={landingStyles.developer}>
                    <div className={landingStyles.devDesc}>I&apos;m a Full Stack Web Developer</div>
                </div>
                <div className={landingStyles.empty}></div>
            </div>
        </div>
        </>
        
    )
}

export default Landing
