import React from 'react';
import styles from './styles/HiddenNavbar.module.css';
import { Link } from 'react-router-dom';


function HiddenNavbar(props) {
    return (
        <div id="hiddenMenu" className={styles.hiddenNavbar} >
            <ul onClick={() => props.toggleStyle(styles.isVisible)}>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/">home</Link></li>
            </ul>
        </div>
    )

}

export default HiddenNavbar;
