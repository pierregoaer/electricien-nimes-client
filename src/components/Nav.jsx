import React, {useState} from 'react';
import {Link} from 'gatsby';

import * as styles from '../styles/nav.module.css';

export default function Nav() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false)

    function handleDisplayMobileNav() {
        setMobileNavVisible((prevState => !prevState))
    }

    return (
        <header className={styles.navContainer}>
            <div className={styles.navMain}>
                <Link to={'/'} className={styles.navLogoContainer}>
                    <img className={styles.navLogo} src="https://res.cloudinary.com/dg8awj55m/image/upload/f_auto/v1683643626/website-lending/electricien-nimes/logos/logo-main.png" alt="Logo Electricien Nîmes"/>
                </Link>
                <ul className={styles.navMainNavigation} data-visible={mobileNavVisible}>
                    <li className={styles.navMainNavigationDropdown}>
                        <Link to={'/services'} onClick={handleDisplayMobileNav}
                              className={styles.navMainNavigationTitle}>Services</Link>
                        <ul className={styles.navMainNavigationDropdownList}>
                            <li><Link to={'/services/installation'} onClick={handleDisplayMobileNav}>Installation</Link></li>
                            <li><Link to={'/services/renovation-et-mise-aux-normes'} onClick={handleDisplayMobileNav}>Rénovation
                                et mise aux normes</Link></li>
                            <li><Link to={'/services/depannage-et-maintenance'} onClick={handleDisplayMobileNav}>Dépannage et
                                maintenance</Link></li>
                            <li><Link to={'/services/eclairage'} onClick={handleDisplayMobileNav}>Éclairage</Link></li>
                            <li><Link to={'/services/domotique-et-objets-connectes'} onClick={handleDisplayMobileNav}>Domotique
                                et objets connectés</Link></li>
                        </ul>
                    </li>
                    <li className={styles.navMainNavigationDropdown}>
                        <Link to={'/realisations'} onClick={handleDisplayMobileNav}
                              className={styles.navMainNavigationTitle}>Réalisations</Link>
                        <ul className={styles.navMainNavigationDropdownList}>
                            <li><Link to={'/realisations/projets-residentiels'} onClick={handleDisplayMobileNav}>Projets
                                résidentiels</Link></li>
                            <li><Link to={'/realisations/projets-commerciaux'} onClick={handleDisplayMobileNav}>Projets
                                commerciaux</Link></li>
                            <li><Link to={'/realisations/projets-industriels'} onClick={handleDisplayMobileNav}>Projets
                                industriels</Link></li>
                        </ul>
                    </li>
                    <li className={styles.navMainNavigationTitle}>
                        <Link to={'/a-propos'} onClick={handleDisplayMobileNav}>À propos</Link>
                    </li>
                    <li className={styles.navMainNavigationTitle}>
                        <Link to={'/blog'} onClick={handleDisplayMobileNav}>Blog</Link>
                    </li>
                </ul>
                <Link to={'/contact'} className={`btn-primary ${styles.navMainNavigationContact}`}>Demander un devis</Link>
                <div className={styles.navMobileNavIconContainer} data-visible={mobileNavVisible}
                     onClick={handleDisplayMobileNav}>
                    <div className={`${styles.mobileNavIcon} ${styles.menuTop} ${mobileNavVisible ? `${styles.active}` : ""}`}></div>
                    <div className={`${styles.mobileNavIcon} ${styles.menuMiddle} ${mobileNavVisible ? `${styles.active}` : ""}`}></div>
                    <div className={`${styles.mobileNavIcon} ${styles.menuBottom} ${mobileNavVisible ? `${styles.active}` : ""}`}></div>
                </div>
            </div>
        </header>
    );
}
