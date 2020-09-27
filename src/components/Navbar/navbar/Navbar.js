import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import hiddenStyles from '../HiddenNavbar/styles/HiddenNavbar.module.css';

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <Link to="/projects">projects</Link>
                <Link to="/contact">contact</Link>
                <Link to="/blog">blog</Link>
                <Link to="/">about</Link>
            </div>

            <div className={styles.menuBtn} onClick={() => props.toggleStyle(hiddenStyles.isVisible)}>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;