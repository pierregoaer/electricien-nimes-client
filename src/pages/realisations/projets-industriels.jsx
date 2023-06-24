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
            <title>Projets Électriques Industriels à Nîmes | Photos & Témoignages</title>
            <meta name="description"
                  content="Explorez nos projets électriques industriels à Nîmes : photos et témoignages de clients satisfaits. Confiez-nous vos projets pour une réalisation impeccable."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/realisations/projets-industriels"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Projets Électriques Industriels à Nîmes | Photos & Témoignages"/>
            <meta property="og:description"
                  content="Explorez nos projets électriques industriels à Nîmes : photos et témoignages de clients satisfaits. Confiez-nous vos projets pour une réalisation impeccable."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849344/website-lending/electricien-nimes/meta-images/projet-industriels.png"/>
        </>
    )
}

export default function IndustrialProjects() {
    const industrialProjectsSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659624/website-lending/electricien-nimes/images/usine-1.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation électrique pour une usine de production'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/usine-6.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Mise en place d\'un système d\'éclairage performant pour un entrepôt'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/usine-5.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Rénovation électrique d\'un atelier de production'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/chaine-automatisee-3.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Installation de dispositifs de sécurité pour une chaîne de production'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659622/website-lending/electricien-nimes/images/chaine-automatisee-2.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Intégration de la domotique et des objets connectés pour un site industriel'
        }
    ]

    const testimonials = [
        {
            quote: "Nous avons fait appel à cette entreprise d'électriciens pour l'installation électrique de notre usine. L'équipe a été très compétente et a su respecter nos contraintes techniques. Nous sommes très satisfaits du résultat !",
            name: "Pierre, directeur d'usine",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-4.webp"
        },
        {
            quote: "Nous avons sollicité cette entreprise pour l'installation d'un éclairage performant dans notre entrepôt. Le travail a été réalisé rapidement et avec soin. La qualité de l'éclairage est excellente et nous avons pu améliorer notre productivité !",
            name: "Martine, responsable logistique",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-5.webp"
        },
        {

            quote: "Un grand merci à cette équipe d'électriciens pour leur expertise lors de la rénovation électrique de notre atelier de production. Tout fonctionne parfaitement et nous avons pu optimiser notre consommation d'énergie. Je les recommande sans hésitation !",
            name: "François, responsable de production",
            image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-6.webp"
        }
    ]

    return (
        <Layout>
            <main className="support-page-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Réalisations de projets électriques industriels à Nîmes : une expertise à votre
                                service</h1>
                            <p>Nos électriciens sont spécialisés dans la <strong>réalisation de projets
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
                            <p>Notre entreprise d'électricité à Nîmes a mené à bien de nombreux <strong>projets
                                électriques
                                industriels</strong> pour des clients de divers secteurs, tels que l'agroalimentaire, la
                                chimie,
                                la métallurgie ou encore la logistique. Nous vous invitons à parcourir notre galerie de
                                photos pour découvrir quelques-unes de nos réalisations :</p>
                        </div>
                        <ImageSlider slides={industrialProjectsSlides}/>
                        <div className={styles.supportPageText}>
                            <p>Chacun de ces projets a été réalisé avec rigueur, professionnalisme et en tenant compte
                                des
                                contraintes spécifiques du secteur industriel. Notre objectif est de garantir la
                                sécurité et
                                la performance de vos <strong>installations électriques</strong>, tout en respectant vos
                                contraintes budgétaires et vos délais.</p>
                        </div>
                    </div>
                </section>
                <Testimonials testimonials={testimonials}/>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>Faites confiance à notre équipe pour réaliser vos <strong>projets
                                électriques industriels</strong>. Notre expertise et notre savoir-faire vous
                                garantissent des
                                installations sécurisées et performantes, adaptées à vos besoins spécifiques. N'hésitez
                                pas à nous contacter pour discuter de votre projet ou demander un devis personnalisé.
                                Nous sommes impatients de vous accompagner et de vous apporter notre expertise en
                                électricité pour les secteurs industriels ou <Link
                                    to={'/realisations/projets-commerciaux'}>commerciaux <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                </svg></Link>.
                            </p>

                            <p>Pour en savoir plus sur nos services et obtenir un devis personnalisé, contactez-nous dès
                                maintenant. Nous serons ravis de vous aider à concrétiser vos projets électriques
                                industriels et de contribuer à la performance et à la sécurité de votre entreprise.
                                Faites le choix d'une entreprise expérimentée et sérieuse pour assurer le succès de vos projets.</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
