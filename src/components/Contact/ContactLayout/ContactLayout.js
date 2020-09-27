import React from 'react';
import styles from './styles/ContactLayout.module.css';

const Contact = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h2>Contact</h2>
            </div>
            <div className={styles.contactContainer}>
                <div>
                    <hr />
                    <p>Phone</p>
                    <h4 className={styles.selectable} >0 621 36 2826</h4>
                </div>

                <div>
                    <hr />
                    <p>email</p>
                    <h4 className={styles.selectable}>krzysztof.zinger@gmail.com</h4>
                </div>

                <div>
                    <hr />
                    <p>Github</p>
                    <h4><a href="https://github.com/ChristopherZinger">Visit -&gt;</a></h4>
                </div>

                <div>
                    <hr />
                    <p>Linkedin</p>
                    <h4><a href="https://www.linkedin.com/in/krzysztof-zinger/">Visit -&gt; </a></h4>
                </div>

            </div>
        </div>
    )
}


export default Contact;