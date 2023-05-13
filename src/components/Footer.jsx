import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/footer.module.css'


export default function Footer() {

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <section className={styles.footerContainer}>
            <div className={`section-inner ${styles.footerMain}`}>
                <div className={styles.footerNav}>
                    <div className={`${styles.column1} ${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/'} className={styles.headerLogoContainer} onClick={scrollToTop}>
                            <img className={styles.headerLogo} src="https://res.cloudinary.com/dg8awj55m/image/upload/f_auto/v1683643626/website-lending/electricien-nimes/logos/logo-main.png" alt="Logo Electricien Nîmes"/>
                        </Link>
                        <p>Votre expert en électricité dans la région de Nîmes vous proposant une gamme complète de services électriques adaptés à vos besoins et de qualité.</p>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/services'} className={styles.columnTitle}>Services</Link>
                        <Link to={'/services/installation'} className={styles.columnLink}>Installation</Link>
                        <Link to={'/services/renovation-et-mise-aux-normes'} className={styles.columnLink}>Rénovation et mise aux normes</Link>
                        <Link to={'/services/depannage-et-maintenance'} className={styles.columnLink}>Dépannage et maintenance</Link>
                        <Link to={'/services/eclairage'} className={styles.columnLink}>Éclairage</Link>
                        <Link to={'/services/domotique-et-objets-connectes'} className={styles.columnLink}>Domotique et objets connectés</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/realisations'} className={styles.columnTitle}>Réalisations</Link>
                        <Link to={'/realisations/projets-residentiels'} className={styles.columnLink}>Projets résidentiels</Link>
                        <Link to={'/realisations/projets-commerciaux'} className={styles.columnLink}>Projets commerciaux</Link>
                        <Link to={'/realisations/projets-industriels'} className={styles.columnLink}>Projets industriels</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Menu</p>
                        <Link to={'/a-propos'} className="column-link">A propos</Link>
                        <Link to={'/blog'} className="column-link">Blog</Link>
                    </div>
                    <div className={`${styles.column5} ${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Vous cherchez un expert ?</p>
                        <Link to={'/contact'} className="btn-primary">Demander un devis</Link>
                        {/*<a href="tel:0000000000" className="contact-phone">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"*/}
                        {/*         fill="none">*/}
                        {/*        <path id="Vector"*/}
                        {/*              d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"*/}
                        {/*              stroke="#000000" strokeWidth="2" strokeLinecap="round"*/}
                        {/*              strokeLinejoin="round"/>*/}
                        {/*    </svg>*/}
                        {/*    0000000000</a>*/}
                    </div>
                </div>
                <div className={styles.footerCopyrights}>
                    © {new Date().getFullYear()}, Eletricien Nîmes
                </div>
            </div>
        </section>
    );
}
