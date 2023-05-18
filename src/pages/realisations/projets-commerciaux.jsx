import React from 'react';
import {Link} from "gatsby";

import Testimonials from "../../components/Testimonials";
import ImageSlider from "../../components/ImageSlider";
import Layout from "../../components/Layout";

import * as styles from '../../styles/support-page.module.css'

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Projets Électriques Commerciaux à Nîmes | Photos & Témoignages | Électricien Nîmes</title>
            <meta name="description"
                  content="Découvrez nos réalisations de projets électriques commerciaux à Nîmes. Galerie de photos et témoignages de clients satisfaits pour vous inspirer."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/realisations/projets-commerciaux"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Projets Électriques Commerciaux à Nîmes | Photos & Témoignages |  Électricien Nîmes"/>
            <meta property="og:description"
                  content="Découvrez nos réalisations de projets électriques commerciaux à Nîmes. Galerie de photos et témoignages de clients satisfaits pour vous inspirer."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849343/website-lending/electricien-nimes/meta-images/projet-commerciaux.png"/>
        </>
    )
}

export default function CommercialProjects() {
    const commercialProjectsSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659624/website-lending/electricien-nimes/images/restaurant-lumineux.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation électrique complète pour un restaurant'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/neon-lumineux.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Mise en place d\'un éclairage extérieur pour une enseigne commerciale'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/bureaux-1.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Rénovation électrique d\'un espace de bureaux'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/magasin-velo.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation de dispositifs de sécurité pour un commerce'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659622/website-lending/electricien-nimes/images/chambre-lumineuse.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Intégration de la domotique et des objets connectés pour un hôtel'
        }
    ]

    const testimonials = [
        {
            quote: "Tout comme mon projet de maison principale, j'ai fait appel à cette entreprise d'électriciens pour la rénovation électrique de mon commerce. L'équipe a été très professionnelle et réactive. Je suis ravi du résultat et je recommande vivement leurs services !",
            name: "Jean-Michel, propriétaire d'une boutique",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-4.webp"
        },
        {
            quote: "Nous avons sollicité cette entreprise pour l'installation de l'éclairage extérieur de notre enseigne. Le travail a été réalisé rapidement et avec soin. Le rendu est magnifique et nous sommes très satisfaits !",
            name: "Stéphanie, gérante d'un restaurant",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-5.webp"
        },
        {

            quote: "Un grand merci à cette équipe d'électriciens pour leur expertise et leur disponibilité lors de l'installation de la domotique dans notre hôtel. Tout fonctionne parfaitement et nous avons pu optimiser notre consommation d'énergie. Je les recommande sans hésitation !",
            name: "Olivier, directeur d'un hôtel",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-6.webp"
        }
    ]

    return (
        <Layout>
            <main className="support-page-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Réalisations de projets électriques commerciaux à Nîmes : découvrez notre expertise</h1>
                            <p>Nos électriciens à Nîmes sont spécialisés dans la <strong>réalisation de projets
                                électriques
                                industriels</strong>. Nous mettons notre expertise et notre savoir-faire au service des
                                entreprises pour leur fournir des solutions électriques adaptées et performantes.
                                Découvrez notre galerie de photos de projets industriels et les témoignages de clients
                                satisfaits pour vous faire une idée de la qualité de notre travail et de l'engagement de
                                notre équipe.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Nos réalisations</h2>
                            <p>Notre entreprise d'électricité à Nîmes a réalisé de nombreux <strong>projets
                                commerciaux</strong> pour des
                                clients variés, tels que des commerces, des restaurants, des bureaux ou encore des
                                établissements publics. Nous vous invitons à parcourir notre galerie de photos pour
                                découvrir quelques-unes de nos réalisations :</p>
                        </div>
                        <ImageSlider slides={commercialProjectsSlides}/>
                        <div className={styles.supportPageText}>
                            <p>Chacun de ces projets a été mené à bien grâce à notre expertise, notre réactivité et
                                notre souci du détail. Notre objectif est de garantir la sécurité et la performance de
                                vos installations électriques, tout en respectant vos contraintes budgétaires et vos
                                délais.</p>
                        </div>
                    </div>
                </section>
                <Testimonials testimonials={testimonials}/>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>Faites confiance à notre équipe d'électriciens à Nîmes pour réaliser vos <strong>projets
                                électriques commerciaux</strong>. Notre expertise et notre savoir-faire vous
                                garantissent des
                                installations sécurisées et performantes, adaptées à vos besoins spécifiques. N'hésitez
                                pas à nous contacter pour discuter de votre projet ou demander un devis personnalisé.
                                Nous sommes impatients de vous accompagner et de vous apporter notre expertise en
                                électricité pour les professionnels à Nîmes.</p>

                            <p>Ne perdez plus de temps à chercher un électricien compétent et sérieux pour vos projets
                                commerciaux. En faisant appel à notre entreprise d'électricité, vous bénéficiez de
                                l'expérience et du professionnalisme d'une équipe dédiée à la réussite de vos projets.
                                Notre engagement envers la qualité et la sécurité de nos installations est la garantie
                                d'un travail réalisé dans les règles de l'art et conforme à vos attentes.</p>

                            <p>Pour en savoir plus sur nos services et discuter de votre projet, n'hésitez pas à nous
                                contacter dès aujourd'hui. Ensemble, nous trouverons les meilleures solutions pour
                                répondre à vos besoins en matière d'électricité et d'éclairage pour votre établissement
                                commercial. Faites le choix d'une entreprise reconnue à Nîmes pour assurer la réussite
                                de vos projets électriques commerciaux ou <Link
                                    to={'/realisations/projets-industriels/'}>industriels <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                </svg></Link>.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
