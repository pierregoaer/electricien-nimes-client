import React, {useState} from 'react';
import * as styles from '../styles/home.module.css'
import {Link} from "gatsby"

export default function FAQQuestion({question, answer}) {
    const [active, setActive] = useState(false)

    function handleToggle() {
        setActive(!active)
    }

    return (
        <li className={active && styles.active}>
            <h4 className={styles.homeFaqQuestion} onClick={handleToggle}>
                {question}
                <div className={`${styles.plusMinusToggle} ${active ? "" : styles.collapsed}`}></div>
            </h4>
            <div className={styles.homeFaqAnswer} dangerouslySetInnerHTML={{__html: answer}}>
            </div>
        </li>

    );
}