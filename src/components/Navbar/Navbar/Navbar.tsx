import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

type Props = {
    navbarIsHidden: boolean;
    toggleNavbar: () => void
}

export const Navbar = (props: Props) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
                <Link to="/blog">blog</Link>
                <Link to="/">home</Link>
            </div>

            <div className={styles.menuBtn} onClick={props.toggleNavbar}>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}
