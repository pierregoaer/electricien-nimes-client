import React from 'react';
import {Link} from "gatsby";
import Layout from "../../components/Layout";

import * as styles from '../../styles/silo-page.module.css'

export function Head() {
    return (
        <>
            <title>Réalisations Électriques à Nîmes | Projets Résidentiels, Commerciaux & Industriels</title>
            <meta name="description" content="Consultez nos réalisations électriques à Nîmes pour les projets résidentiels, commerciaux et industriels. Bénéficiez de notre expertise pour vos projets."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/realisations"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Réalisations Électriques à Nîmes | Projets Résidentiels, Commerciaux & Industriels"/>
            <meta property="og:description" content="Consultez nos réalisations électriques à Nîmes pour les projets résidentiels, commerciaux et industriels. Bénéficiez de notre expertise pour vos projets."/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849344/website-lending/electricien-nimes/meta-images/projet-electrique.png"/>
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
                            <p>Découvrez nos réalisations électriques à Nîmes, témoignant de notre savoir-faire et de
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
                        <div className={styles.siloCard}>
                            <div className={styles.siloCardText}>
                                <h4>Projets résidentiels</h4>
                                <p>Nos réalisations dans le domaine résidentiel comprennent une grande variété de
                                    projets, allant de la construction neuve à la rénovation, en passant par
                                    l'installation d'éclairage et la mise en place de systèmes domotiques. Grâce à
                                    notre
                                    expérience et à notre expertise, nous avons pu mener à bien de nombreux projets
                                    résidentiels, en veillant à répondre aux besoins spécifiques de chaque
                                    client.</p>

                                <p>Parmi nos réalisations résidentielles, vous trouverez des installations
                                    électriques
                                    complètes pour des maisons individuelles, des appartements ou des logements
                                    collectifs. Nous avons également réalisé des travaux de rénovation électrique
                                    pour
                                    des bâtiments anciens, en veillant à respecter les normes en vigueur et à
                                    améliorer
                                    la sécurité et la performance des installations existantes.</p>

                                <p>Dans le domaine de l'éclairage, nous avons conçu et installé des solutions
                                    adaptées
                                    aux besoins de nos clients, en privilégiant les technologies économiques et
                                    écologiques telles que les LED et les systèmes de gestion intelligente de
                                    l'éclairage. Enfin, notre expertise en domotique et objets connectés nous a
                                    permis
                                    de proposer des solutions innovantes pour améliorer le confort et la sécurité
                                    des
                                    habitations de nos clients.</p>
                                <Link to={'/realisations/projets-residentiels'} className="btn-tertiary">En savoir
                                    plus</Link>
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
                        <div className={styles.siloCard}>
                            <div className={styles.siloCardText}>
                                <h4>Projets commerciaux</h4>
                                <p>Nos réalisations dans le secteur commercial témoignent de notre capacité à
                                    répondre
                                    aux besoins spécifiques des entreprises et des commerces. Nous avons mené à bien
                                    de
                                    nombreux projets d'installations électriques pour des magasins, des bureaux, des
                                    restaurants ou encore des hôtels. Notre objectif est de proposer des solutions
                                    sur-mesure pour optimiser la performance énergétique et garantir la sécurité de
                                    vos
                                    locaux professionnels.</p>

                                <p>Parmi nos réalisations commerciales, vous trouverez des travaux d'installation
                                    électrique, de rénovation et de mise aux normes pour des bâtiments de toutes
                                    tailles. Nous avons également conçu et installé des solutions d'éclairage
                                    adaptées
                                    aux besoins des professionnels, en tenant compte des spécificités de chaque
                                    secteur
                                    d'activité. Enfin, nous avons accompagné nos clients dans la mise en place de
                                    systèmes domotiques et d'objets connectés pour faciliter la gestion et la
                                    sécurisation de leurs locaux.</p>
                                <Link to={'/realisations/projets-commerciaux'} className="btn-tertiary">En savoir
                                    plus</Link>
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
                        <div className={styles.siloCard}>
                            <div className={styles.siloCardText}>
                                <h4>Projets industriels</h4>
                                <p>Nos réalisations dans le domaine industriel montrent notre expertise et notre
                                    savoir-faire en matière d'installations électriques pour des sites de
                                    production,
                                    des usines ou des entrepôts. Nous avons réalisé des projets d'installation et de
                                    rénovation électrique pour des structures industrielles de différentes tailles
                                    et
                                    secteurs d'activité.</p>

                                <p>Dans ce contexte, nous avons travaillé sur la mise en place de réseaux
                                    électriques
                                    performants et sécurisés, en tenant compte des contraintes spécifiques des sites
                                    industriels. Nos réalisations comprennent également des travaux d'éclairage
                                    adaptés
                                    aux besoins des entreprises, en privilégiant des solutions économiques et
                                    durables.</p>

                                <p>Enfin, nous avons accompagné nos clients industriels dans la mise en place de
                                    systèmes de gestion intelligente de l'énergie et de la domotique, permettant
                                    d'optimiser la consommation énergétique et de faciliter la surveillance et le
                                    contrôle des installations.</p>
                                <Link to={'/realisations/projets-industriels'} className="btn-tertiary">En savoir
                                    plus</Link>
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
                </section>
                <section>
                    <div className="silo-page-text-block secondary-section-padding">
                        <p>Nos réalisations électriques à Nîmes témoignent de notre expertise et de notre engagement
                            à
                            fournir des services de qualité pour tous types de projets, qu'ils soient résidentiels,
                            commerciaux ou industriels. Faites confiance à notre équipe d'électriciens
                            professionnels
                            pour vous accompagner dans la réalisation de vos projets électriques et bénéficiez de
                            notre
                            expérience pour garantir la sécurité et la performance de vos installations. Pour en
                            savoir
                            plus sur nos réalisations et discuter de votre projet, n'hésitez pas à nous
                            contacter.</p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
