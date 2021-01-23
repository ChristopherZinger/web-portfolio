import React from 'react';
import styles from './styles/AboutHobby.module.css';
import { hobbyData } from '../../../data/data-hobby';

export const AboutHobby = () => {
    return (
        <div className={styles.hobbysContainer} >
            <div className={styles.title}>
                <h3>Hobby</h3>
                <hr />
            </div>
            {
                hobbyData.map((hobby, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <span>
                                    {hobby.svg}
                                </span>
                                <span>
                                    <h4>{hobby.title}</h4>
                                </span>
                            </div>
                            <hr className={styles.hr} />
                            <div>
                                <p>
                                    {hobby.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}