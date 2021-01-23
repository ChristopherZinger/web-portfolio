import React from 'react';
import styles from './styles/ContactFooter.module.css';
import svgs from '../../../SVG/svg';
const SVGlib = svgs();

export const ContactFooter = () => {
    return (
        <div className={styles.contactFooter}>
            <div>
                <div ></div>
                <a className={styles.linkContainer} href="https://www.linkedin.com/in/krzysztof-zinger/">
                    {SVGlib.linkedin}
                </a>

                <a className={styles.linkContainer} href="https://github.com/ChristopherZinger">
                    {SVGlib.git}
                </a>
            </div>
        </div>
    )
}