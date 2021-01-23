import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar/Navbar';
import { HiddenNavbar } from '../Navbar/HiddenNavbar/HiddenNavbar';
import ContactLayout from '../Contact/ContactLayout/ContactLayout';
import AboutLayout from '../About/AboutLayout/AboutLayout';
import ProjectLayout from '../Project/ProjectLayout/ProjectLayout';
import { Switch, Route } from 'react-router-dom';
import styles from './styles/Layout.module.css';
import ColorToggler from '../Navbar/ColorToggler/ColorToggler';
import BlogLayout from '../Blog/BlogLayout/BlogLayout';
import { projects, ProjectType } from "../../data/data";
import hiddenStyles from "../Navbar/HiddenNavbar/styles/HiddenNavbar.module.css";

export const Main = () => {

    // TODO: this shoul handle toggling menu maybe with react context 

    const loadImg = (proj: ProjectType) => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = proj.gifSrc
        })
    }

    const [navbarIsHidden, setNavbarIsHidden] = useState(true);

    const toggleNavbar = () => {
        setNavbarIsHidden(!navbarIsHidden)
        document.getElementById('hiddenMenu')?.classList.toggle(hiddenStyles.isVisible);
    }

    // start loading gifs for the project.
    useEffect(() => { Promise.all(projects.map(p => () => loadImg(p))) }, [])

    return (
        <>
            <HiddenNavbar navbarIsHidden={navbarIsHidden} toggleNavbar={toggleNavbar} />
            <div className={styles.container} >
                < Navbar navbarIsHidden={navbarIsHidden} toggleNavbar={toggleNavbar} />
                <ColorToggler />
                <Switch>
                    <Route path='/projects' component={() => <ProjectLayout projects={projects} />} />
                    <Route path='/contact' component={ContactLayout} />
                    <Route path='/blog' component={BlogLayout} />
                    <Route path='/' component={AboutLayout} />
                </Switch>
            </div>
        </>
    )
}