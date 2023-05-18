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
                        <p>Votre expert en électricité dans la région de Nîmes vous proposant une gamme complète de
                            services électriques adaptés à vos besoins et de qualité.</p>

                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/services'} className={styles.columnTitle}>Services</Link>
                        <Link to={'/services/installation-electrique'} className={styles.columnLink}>Installation</Link>
                        <Link to={'/services/renovation-et-mise-aux-normes'} className={styles.columnLink}>Rénovation et
                            mise aux normes</Link>
                        <Link to={'/services/depannage-et-maintenance'} className={styles.columnLink}>Dépannage et
                            maintenance</Link>
                        <Link to={'/services/eclairage'} className={styles.columnLink}>Éclairage</Link>
                        <Link to={'/services/domotique-et-objets-connectes'} className={styles.columnLink}>Domotique et
                            objets connectés</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <Link to={'/realisations'} className={styles.columnTitle}>Réalisations</Link>
                        <Link to={'/realisations/projets-residentiels'} className={styles.columnLink}>Projets
                            résidentiels</Link>
                        <Link to={'/realisations/projets-commerciaux'} className={styles.columnLink}>Projets
                            commerciaux</Link>
                        <Link to={'/realisations/projets-industriels'} className={styles.columnLink}>Projets
                            industriels</Link>
                    </div>
                    <div className={`${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Menu</p>
                        <Link to={'/a-propos'} className="column-link">À propos</Link>
                        <Link to={'/blog'} className="column-link">Blog</Link>
                    </div>
                    <div className={`${styles.column5} ${styles.column} ${styles.flexColumn}`}>
                        <p className={styles.columnTitle}>Vous cherchez un expert ?</p>
                        <Link to={'/contact'} className="btn-primary">Demander un devis</Link>
                        <div className={styles.socialsContainer}>
                            <p>Suivez-nous :</p>
                            <div className={styles.socialsIcons}>
                                <a href="https://facebook.com" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                                    </svg>
                                </a>
                                {/*<a href="https://instagram.com" target="_blank">*/}
                                {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
                                {/*        <path*/}
                                {/*            d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>*/}
                                {/*    </svg>*/}
                                {/*</a>*/}
                            </div>
                        </div>
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
                    © {new Date().getFullYear()}, Electricien Nîmes
                </div>
            </div>
        </section>
    );
}
