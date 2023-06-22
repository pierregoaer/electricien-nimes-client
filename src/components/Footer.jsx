import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/footer.module.css'
import {StaticImage} from "gatsby-plugin-image";


export default function Footer() {

    function scrollToTop() {
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
                            <StaticImage
                                src="https://res.cloudinary.com/dg8awj55m/image/upload/v1683643626/website-lending/electricien-nimes/logos/logo-main.png"
                                alt="Logo Electricien Nîmes"
                                height={45}
                            />
                        </Link>
                        <div className={styles.socialsContainer}>
                            <p>Suivez-nous</p>
                            <div className={styles.socialsIcons}>
                                <a href="https://www.facebook.com/electriciens.nimes" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/services/'} className={styles.columnTitle}>Services</Link>
                        <Link to={'/services/installation-electrique/'} className={styles.columnLink}>Installation</Link>
                        <Link to={'/services/renovation-et-mise-aux-normes/'} className={styles.columnLink}>Rénovation et
                            mise aux normes</Link>
                        <Link to={'/services/depannage-et-maintenance/'} className={styles.columnLink}>Dépannage et
                            maintenance</Link>
                        <Link to={'/services/eclairage/'} className={styles.columnLink}>Éclairage</Link>
                        <Link to={'/services/domotique-et-objets-connectes/'} className={styles.columnLink}>Domotique et
                            objets connectés</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/realisations/'} className={styles.columnTitle}>Réalisations</Link>
                        <Link to={'/realisations/projets-residentiels/'} className={styles.columnLink}>Projets
                            résidentiels</Link>
                        <Link to={'/realisations/projets-commerciaux/'} className={styles.columnLink}>Projets
                            commerciaux</Link>
                        <Link to={'/realisations/projets-industriels/'} className={styles.columnLink}>Projets
                            industriels</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Menu</p>
                        <Link to={'/a-propos/'} className="column-link">À propos</Link>
                        <Link to={'/blog/'} className="column-link">Blog</Link>
                    </div>
                    <div className={`${styles.column5} ${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Vous cherchez un expert ?</p>
                        <Link to={'/contact/'} className="btn-primary">Demander un devis</Link>

                    </div>
                </div>
                <div className={styles.footerCopyrights}>
                    © {new Date().getFullYear()}, Electricien Nîmes | <Link to='/mentions-legales'>Mentions Légales</Link>
                </div>
            </div>
        </section>
    );
}
