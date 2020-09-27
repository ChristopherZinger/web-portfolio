import React from 'react';
import styles from './styles/BlogLayout.module.css';

function Blog(props) {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>Blog</h2>
            <div className={styles.posts}>
                <hr />
                <h4>Sorry.</h4>
                <p > This section of the webpage is under construction.</p>
            </div>
        </div>
    )
}

export default Blog;