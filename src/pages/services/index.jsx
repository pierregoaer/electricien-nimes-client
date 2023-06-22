import React from 'react';
import {Link} from "gatsby";

import * as styles from '../../styles/silo-page.module.css'
import Layout from "../../components/Layout";
import {StaticImage} from "gatsby-plugin-image";

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Services Électriques à Nîmes | Installation, Rénovation & Dépannage</title>
            <meta name="description"
                  content="Nos services électriques à Nîmes couvrent installations, rénovations, dépannages, éclairages et domotique. Obtenez un service complet et professionnel."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/services"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Services Électriques à Nîmes | Installation, Rénovation & Dépannage"/>
            <meta property="og:description"
                  content="Nos services électriques à Nîmes couvrent installations, rénovations, dépannages, éclairages et domotique. Obtenez un service complet et professionnel."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849344/website-lending/electricien-nimes/meta-images/services-electricien.png"/>
        </>
    )
}

export default function Services() {
    return (
        <Layout>
            <main>
                <section className="silo-page-hero">
                    <div className="section-inner hero-section-padding">
                        <div className="silo-page-text-block">
                            <h1>Découvrez nos services électriques à Nîmes : une gamme complète pour répondre à tous vos
                                besoins.</h1>
                            <p>Notre entreprise d'électricité à Nîmes vous propose une gamme complète de services
                                électriques pour répondre à tous vos besoins, qu'il s'agisse d'installations neuves, de
                                rénovations, de dépannages, d'éclairage ou de domotique et objets connectés. Notre
                                équipe
                                d'électriciens professionnels est à votre écoute pour vous accompagner et vous
                                conseiller
                                dans la réalisation de vos projets. Découvrez ci-dessous nos différents services
                                électriques.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={`${styles.siloCards} secondary-section-padding`}>
                        <div className={styles.siloCardContainer}>
                            <StaticImage
                                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                                alt="Image de fond"
                                style={{position: 'absolute'}}
                                className='background-image'
                            />
                            <div className={styles.siloCard}>
                                <div className={styles.siloCardText}>
                                    <h2>Installation</h2>
                                    <p>Que vous ayez besoin d'une installation électrique pour un bâtiment neuf ou pour
                                        remplacer un système existant, nous sommes là pour vous aider. Nous réalisons
                                        des <strong>installations électriques</strong> résidentielles, commerciales et
                                        industrielles, en
                                        veillant à respecter les normes en vigueur et à optimiser la sécurité et la
                                        performance
                                        de vos équipements.</p>
                                    <Link to={'/services/installation-electrique/'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos services d'installation
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1681828281/website-lending/electricien-nimes/images/electricien-sur-chantier-3.jpg"
                                        alt="Electricien sur une nouvelle installation électrique"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.siloCardContainer}>
                            <StaticImage
                                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                                alt="Image de fond"
                                style={{position: 'absolute'}}
                                className='background-image'
                            />
                            <div className={styles.siloCard}>
                                <div className={styles.siloCardText}>
                                    <h2>Rénovation et mise aux normes</h2>
                                    <p>La <strong>rénovation électrique</strong> est essentielle pour garantir la sécurité et la conformité
                                        de vos installations. Nous prenons en charge la mise aux normes, le remplacement
                                        de tableaux électriques et la réparation de circuits électriques. Nos électriciens
                                        à Nîmes travaillent avec rigueur et professionnalisme pour assurer la qualité et
                                        la sécurité de vos installations.</p>
                                    <Link to={'/services/renovation-et-mise-aux-normes/'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos services de rénovation
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682630773/website-lending/electricien-nimes/images/armoire-electrique-a-remplacer.jpg"
                                        alt="Rénovation d'une armoir électrique"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.siloCardContainer}>
                            <StaticImage
                                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                                alt="Image de fond"
                                style={{position: 'absolute'}}
                                className='background-image'
                            />
                            <div className={styles.siloCard}>
                                <div className={styles.siloCardText}>
                                    <h2>Dépannage et maintenance</h2>
                                    <p>En cas de panne ou d'<strong>urgence électrique</strong>, notre équipe de dépannage intervient
                                        rapidement pour résoudre vos problèmes. Nous diagnostiquons et réparons les
                                        pannes,
                                        et remplaçons les composants défectueux. Nos électriciens sont disponibles 24/7
                                        pour
                                        vous garantir une intervention rapide et efficace en toutes circonstances.</p>
                                    <Link to={'/services/depannage-et-maintenance/'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos services de dépannage
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659617/website-lending/electricien-nimes/images/cables-electriques-1.jpg"
                                        alt="Dépannage électrique en cas d'urgence"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.siloCardContainer}>
                            <StaticImage
                                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                                alt="Image de fond"
                                style={{position: 'absolute'}}
                                className='background-image'
                            />
                            <div className={styles.siloCard}>
                                <div className={styles.siloCardText}>
                                    <h2>Éclairage</h2>
                                    <p>Nous proposons des <strong>solutions d'éclairage</strong> intérieur et extérieur adaptées à vos
                                        besoins et à votre budget. Notre équipe vous conseille sur les meilleures
                                        options
                                        pour économiser de l'énergie et améliorer le confort de votre habitat ou de
                                        votre
                                        local commercial. Nous installons également des systèmes d'éclairage LED et
                                        domotique pour vous offrir un contrôle optimal de vos installations.</p>
                                    <Link to={'/services/eclairage/'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos services en éclairage
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682631138/website-lending/electricien-nimes/images/luminaire.jpg"
                                        alt="Installation d'éclairage intérieur"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.siloCardContainer}>
                            <StaticImage
                                src='https://res.cloudinary.com/dg8awj55m/image/upload/v1684328207/website-lending/electricien-nimes/images/electricien-nimes-background-image-small.webp'
                                alt="Image de fond"
                                style={{position: 'absolute'}}
                                className='background-image'
                            />
                            <div className={styles.siloCard}>
                                <div className={styles.siloCardText}>
                                    <h2>Domotique et objets connectés</h2>
                                    <p>La domotique et les objets connectés révolutionnent notre façon de vivre et de
                                        gérer
                                        notre quotidien. Nous vous accompagnons dans l'<strong>installation de systèmes
                                        domotiques</strong> et d'objets connectés pour optimiser le confort, la sécurité et l'efficacité
                                        énergétique de votre habitation ou de votre entreprise.</p>
                                    <Link to={'/services/domotique-et-objets-connectes/'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos services en domotique
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659622/website-lending/electricien-nimes/images/maison-connectee.jpg"
                                        alt="Installation d'objets connectés"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="silo-page-text-block secondary-section-padding">
                        <p>Faites appel à notre entreprise d'électricité à Nîmes pour bénéficier d'une gamme
                            complète de
                            services électriques adaptés à vos besoins. Notre équipe de professionnels qualifiés est
                            à
                            votre service pour vous offrir des solutions sur-mesure et vous garantir des
                            installations
                            sûres et performantes. N'hésitez pas à nous contacter pour discuter de votre projet et
                            obtenir un devis personnalisé.</p>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
