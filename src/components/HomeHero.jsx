import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/home.module.css'

export default function HomeHero() {
    return (
        <section className={styles.homeHeroContainer}>
            <div className={`section-inner hero-section-padding ${styles.homeHeroMain}`}>
                <div className={styles.homeHeroText}>
                    <h1>Votre expert en électricité <span className="text-highlight">à Nîmes</span>.</h1>
                    <p>Forts de notre expérience et de notre expertise, nous vous proposons une gamme complète de
                        services électriques adaptés à vos besoins. Vous êtes au bon endroit pour un service de qualité,
                        réalisé par des électriciens à Nîmes compétents et passionnés. Ensemble, faisons de vos projets
                        électriques une réussite !</p>
                    <Link to={'/contact'} className={`btn-primary`}>Contactez-Nous</Link>
                </div>
                <div className={styles.heroImage}>
                    <img
                        src="https://res.cloudinary.com/dg8awj55m/image/upload/h_500,w_500,f_auto/v1683643284/website-lending/electricien-nimes/images/home-hero.png"
                        alt="Electricien Nîmes"/>
                </div>
            </div>
        </section>
    );
}
