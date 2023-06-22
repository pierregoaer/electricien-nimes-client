import React from 'react';
import {Link} from "gatsby";
import Layout from "../../components/Layout";

import * as styles from '../../styles/silo-page.module.css'
import {StaticImage} from "gatsby-plugin-image";

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Réalisations Électriques à Nîmes | Projets Résidentiels, Commerciaux & Industriels |  Électricien Nîmes</title>
            <meta name="description"
                  content="Consultez nos réalisations électriques à Nîmes pour les projets résidentiels, commerciaux et industriels. Bénéficiez de notre expertise pour vos projets."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/realisations"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Réalisations Électriques à Nîmes | Projets Résidentiels, Commerciaux & Industriels |  Électricien Nîmes"/>
            <meta property="og:description"
                  content="Consultez nos réalisations électriques à Nîmes pour les projets résidentiels, commerciaux et industriels. Bénéficiez de notre expertise pour vos projets."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849344/website-lending/electricien-nimes/meta-images/projet-electrique.png"/>
        </>
    )
}

export default function Realizations() {
    return (
        <Layout>
            <main>
                <section className="silo-page-hero">
                    <div className="section-inner hero-section-padding silo-main">
                        <div className="silo-page-text-block">
                            <h1>Nos réalisations électriques à Nîmes : une expertise au service de vos projets.</h1>
                            <p>Découvrez nos <strong>réalisations électriques</strong> à Nîmes, témoignant de notre savoir-faire et de
                                notre
                                expertise dans les domaines résidentiel, commercial et industriel. Notre équipe
                                d'électriciens professionnels est fière de vous présenter les projets que nous avons
                                menés à
                                bien, illustrant la qualité de notre travail et notre engagement envers la satisfaction
                                de
                                nos clients. Retrouvez ci-dessous nos différentes réalisations électriques.</p>
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
                                    <h2>Projets résidentiels</h2>
                                    <p>Nos réalisations dans le domaine résidentiel comprennent une grande variété de
                                        projets, allant de la construction neuve à la rénovation, en passant par
                                        l'installation d'éclairage et la mise en place de systèmes domotiques. Grâce à
                                        notre
                                        expérience et à notre expertise, nous avons pu mener à bien de nombreux projets
                                        résidentiels, en veillant à répondre aux besoins spécifiques de chaque
                                        client.</p>

                                    <p><strong>Parmi nos réalisations résidentielles</strong>, vous trouverez des <strong>installations
                                        électriques complètes pour des maisons individuelles, des appartements ou des logements
                                        collectifs</strong>. Nous avons également réalisé des travaux de rénovation électrique
                                        pour des bâtiments anciens, en veillant à respecter les <a href={'https://www.blog.123elec.com/electricite/normes-electriques/'} target={'_blank'}>normes en vigueur <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></a> et à
                                        améliorer la sécurité et la performance des installations existantes.</p>

                                    <p>Dans le domaine de l'éclairage, nous avons conçu et installé des solutions
                                        adaptées aux besoins de nos clients, en privilégiant les technologies économiques et
                                        écologiques telles que les LED et les systèmes de gestion intelligente de
                                        l'éclairage. Enfin, notre expertise en domotique et objets connectés nous a
                                        permis de proposer des solutions innovantes pour améliorer le confort et la sécurité
                                        des <strong>habitations de nos clients</strong>.</p>
                                    <Link to={'/realisations/projets-residentiels'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos projets résidentiels
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659620/website-lending/electricien-nimes/images/chambre-lumineuse.jpg"
                                        alt="Réalisation de projets résidentiels 1"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682631078/website-lending/electricien-nimes/images/salon-moderne-1.jpg"
                                        alt="Electricien Nîmes"
                                        className="Réalisation de projets résidentiels 2"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659624/website-lending/electricien-nimes/images/veranda-extension.jpg"
                                        alt="Electricien Nîmes"
                                        className="Réalisation de projets résidentiels 3"
                                    />
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
                                    <h2>Projets commerciaux</h2>
                                    <p>Nos réalisations dans le <strong>secteur commercial</strong> témoignent de notre capacité à
                                        répondre
                                        aux besoins spécifiques des entreprises et des commerces. Nous avons mené à bien
                                        de nombreux projets d'installations électriques pour <strong>des magasins, des bureaux, des
                                        restaurants ou encore des hôtels</strong>. Notre objectif est de proposer des solutions
                                        sur-mesure pour optimiser la performance énergétique et garantir la sécurité de
                                        vos
                                        locaux professionnels.</p>

                                    <p>Parmi nos <strong>réalisations commerciales</strong>, vous trouverez des travaux d'installation
                                        électrique, de rénovation et de mise aux normes pour des bâtiments de toutes
                                        tailles. Nous avons également conçu et installé des solutions d'éclairage
                                        adaptées
                                        aux besoins des professionnels, en tenant compte des spécificités de chaque
                                        secteur
                                        d'activité. Enfin, nous avons accompagné nos clients dans la mise en place de
                                        systèmes domotiques et d'objets connectés pour faciliter la gestion et la
                                        sécurisation de leurs locaux.</p>
                                    <Link to={'/realisations/projets-commerciaux'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos projets commerciaux
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682696152/website-lending/electricien-nimes/images/bureaux-3.jpg"
                                        alt="Réalisation de projets commerciaux 1"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659625/website-lending/electricien-nimes/images/bureaux-1.jpg"
                                        alt="Réalisation de projets commerciaux 2"
                                        className="mobile-hidden"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682696153/website-lending/electricien-nimes/images/bureaux-4.jpg"
                                        alt="Réalisation de projets commerciaux 3"
                                        className="mobile-hidden"
                                    />
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
                                    <h2>Projets industriels</h2>
                                    <p>Nos réalisations dans le domaine industriel montrent notre expertise et notre
                                        savoir-faire en matière d'<strong>installations électriques pour des sites de
                                        production</strong>, des usines ou des entrepôts. Nous avons réalisé des projets d'installation et de
                                        rénovation électrique pour des structures industrielles de différentes tailles
                                        et
                                        secteurs d'activité.</p>

                                    <p>Dans ce contexte, nous avons travaillé sur la mise en place de réseaux
                                        électriques
                                        performants et sécurisés, en tenant compte des contraintes spécifiques des <strong>sites
                                        industriels</strong>. Nos réalisations comprennent également des travaux d'éclairage
                                        adaptés
                                        aux besoins des entreprises, en privilégiant des solutions économiques et
                                        durables.</p>

                                    <p>Enfin, nous avons accompagné nos clients industriels dans la mise en place de
                                        systèmes de gestion intelligente de l'énergie et de la domotique, permettant
                                        d'optimiser la consommation énergétique et de faciliter la surveillance et le
                                        contrôle des installations.</p>
                                    <Link to={'/realisations/projets-industriels'}
                                          className={`btn-tertiary ${styles.siloCardBtn}`}>
                                        Voir nos projets industriels
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className={styles.siloCardImage}>
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682695884/website-lending/electricien-nimes/images/usine-6.jpg"
                                        alt="Réalisation de projets industriels 1"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1682695885/website-lending/electricien-nimes/images/usine-5.jpg"
                                        alt="Réalisation de projets industriels 2"
                                        className="mobile-hidden"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_600,w_800,f_auto/v1683659619/website-lending/electricien-nimes/images/chaine-automatisee-3.jpg"
                                        alt="Réalisation de projets industriels 3"
                                        className="mobile-hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="silo-page-text-block secondary-section-padding">
                        <p>Nos <strong>réalisations électriques</strong> à Nîmes témoignent de notre expertise et de notre engagement
                            à fournir des services de qualité pour tous types de projets, qu'ils soient résidentiels,
                            commerciaux ou industriels. Faites confiance à notre équipe d'électriciens
                            professionnels pour vous accompagner dans la réalisation de vos <strong>projets électriques</strong> et bénéficiez de
                            notre expérience pour garantir la sécurité et la performance de vos installations. Pour en
                            savoir plus sur nos réalisations et discuter de votre projet, n'hésitez pas à nous
                            contacter.</p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
