import React from 'react';
import * as styles from '../styles/testimonials.module.css'
import {StaticImage} from "gatsby-plugin-image";


export default function TestimonialCard({quote, name, image}) {
    return (
        <li className={styles.testimonialCard}>
            <div className={`${styles.testimonialCardQuote} ${styles.justifiedText}`}>{quote}</div>
            <div className={styles.testimonialCardDetails}>
                <img className={styles.image} src={image} alt={`Témoignage ${name}`}/>
                <div className={styles.name}>{name}</div>
            </div>
        </li>

    );
}