import React, { Fragment } from 'react';
import styles from './styles/AboutHello.module.css';


function AboutItem(props) {
    return (
        <Fragment>
            <article className={styles.text}>
                Hi! I am Christopher, a self-taught programmer living in Amsterdam.
                I am a designer by profession and web developer by passion.
                I am looking for the opportunity to prove and advance my
                Javascript, React, Node and Python skills.
            </article>
        </Fragment>

    )
}

export default AboutItem;