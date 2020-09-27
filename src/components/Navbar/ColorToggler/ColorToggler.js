import React, { useState } from 'react';
import styles from './styles/ColorToggler.module.css';
import svgs from '../../../SVG/svg';

const SVGlib = svgs();

function ColorToggler(props) {
    const colors = {
        defaultSet: {
            name: 'balckandwhite',
            bg: 'white',
            letters: 'black',
            heart: 'red',
            dotPointer: 'coral',
            ipadFame: 'rgb(50, 50, 50)',
            shadow: 'rgb(180, 180, 180)',
            missingFilter: 'coral'
        },
        sets: [
            {
                bg: '#003EB6',
                letters: '#E679B3',
                heart: 'white',
                dotPointer: 'white',
                ipadFame: 'white',
                shadow: 'none',
                missingFilter: '#003EB6'
            },
            {
                bg: '#FFB4DC',
                letters: '#003EB6',
                heart: 'white',
                dotPointer: 'white',
                ipadFame: '#003EB6',
                shadow: 'none',
                missingFilter: '#003EB6'
            },
            {
                bg: '#C9EDFF',
                letters: '#FF68B6',
                heart: 'white',
                dotPointer: 'white',
                ipadFame: '#FF68B6',
                shadow: 'none',
                missingFilter: '#FF68B6'
            }
        ]
    }
    const [colSet, setColSet] = useState(0);
    const [isBlack, setIsBlack] = useState(true)
    const [iLove, setILove] = useState('colors');

    function toggleColors() {
        var set;
        if (isBlack) {
            set = colors.sets[colSet];
            setColSet(
                colSet + 1 <= colors.sets.length - 1
                    ? colSet + 1
                    : 0
            )
            setILove('black & white');
        } else {
            set = colors.defaultSet;
            setILove('colors');
        }

        setIsBlack(!isBlack);


        document.documentElement.style.setProperty("--bg-color", set.bg);
        document.documentElement.style.setProperty("--font-color", set.letters);
        document.documentElement.style.setProperty("--heart-color", set.heart);
        document.documentElement.style.setProperty("--dot-pointer", set.dotPointer);
        document.documentElement.style.setProperty("--ipad-frame-color", set.ipadFame);
        document.documentElement.style.setProperty("--shadow-color", set.shadow);
        document.documentElement.style.setProperty("--missing-filter-color", set.missingFilter);
    }


    return (
        <div onClick={toggleColors} className={styles.colorToggler} >
            <div>
                <p> I </p> {SVGlib.heart} <p>{iLove}</p>
            </div>
        </div >
    )
}

export default ColorToggler;
