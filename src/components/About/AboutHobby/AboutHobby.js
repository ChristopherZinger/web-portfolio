import React from 'react';
import styles from './styles/AboutHobby.module.css'
import svgs from '../../../SVG/svg';
const SVGlib = svgs();

function HobbyItem(props) {

    const hobbyData = [
        {
            svg: SVGlib.hobby.art,
            title: 'Art',
            description: 'Is a timeless source of inspiration and ideas for my projects and my live.'
        },
        {
            svg: SVGlib.hobby.music,
            title: 'Music',
            description: 'In my free time I love to play piano and guitar. I use to play in the band in high school.'
        },
        {
            svg: SVGlib.hobby.technology,
            title: 'Technology',
            description: 'I love to experiment with new technologies, doesn\'t matter if it is a new web framework, graphic or 3d software, Arduino / raspberry pie, or my 3d printer.'
        },
        {
            svg: SVGlib.hobby.travel,
            title: 'Travel',
            description: 'Is all always fun. I once have hitchhiked from Warsaw to Madrid and back. It was the best! I love all the people I have met on the way.'
        },
        {
            svg: SVGlib.hobby.architecture,
            title: 'Architecture',
            description: 'Is more than just a profession, it is a cultural practice. I love analysing the work of masters like P. Eisenman or R. Koolhaas.'
        }
    ]


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

export default HobbyItem;