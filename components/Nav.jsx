import React, { useEffect, useState, useRef } from 'react'
import navStyles from '../styles/Nav.module.scss'
import { prefix } from '../utilits/prefix';

const Nav = ({navActv}) => {

    const navb = useRef()
    const navbar = useRef()

    function bugerMenu() {
        navb.current.classList.toggle(`${navStyles.show}`)
        navbar.current.classList.toggle(`${navStyles.navShow}`)
    }

    function closeMenu() {
        navb.current.classList.contains(`${navStyles.show}`) ? navb.current.classList.remove(`${navStyles.show}`) : ''
        navbar.current.classList.contains(`${navStyles.navShow}`) ? navbar.current.classList.remove(`${navStyles.navShow}`) : ''
    }

    useEffect(()=> {
        if(navActv) {
            navbar.current.classList.add(`${navStyles.navActive}`)
        } else {
            navbar.current.classList.remove(`${navStyles.navActive}`)
        }
      }, [navActv])


    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav} ref={navbar} id="nav">
                <div className={navStyles.emptySpace}>
                    <a className={navStyles.navBtn} href="#landing"><img src={`${prefix}/logo.svg`} alt="logo" /></a>
                </div>
                <button className={navStyles.navbarToggler} 
                        id="burger"
                        onClick={bugerMenu}
                >
                    <span className={navStyles.navbarTogglerIcon}></span>
                </button>
                <ul className={navStyles.navbar} ref={navb} id="navbar">
                    <li><a className={navStyles.navBtn} onClick={closeMenu} href="#about">about</a></li>
                    <li><a className={navStyles.navBtn} onClick={closeMenu} href="#projects">projects</a></li>
                    <li><a className={navStyles.navBtn} onClick={closeMenu} href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
