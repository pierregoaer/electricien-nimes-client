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
    const newConstructionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682695420/website-lending/electricien-nimes/images/maison-moderne.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'InstallationElectrique d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682631078/website-lending/electricien-nimes/images/salon-moderne-1.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659622/website-lending/electricien-nimes/images/maison-connectee.jpg',
            slideAlt: 'Conception et réalisation de constructions neuves',
            slideText: 'InstallationElectrique de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const renovationSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1682630773/website-lending/electricien-nimes/images/armoire-electrique-a-remplacer.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'InstallationElectrique d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659617/website-lending/electricien-nimes/images/cables-electriques-1.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1681828281/website-lending/electricien-nimes/images/electricien-sur-chantier-3.jpg',
            slideAlt: "Rénovation d'installation électrique",
            slideText: 'InstallationElectrique de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    const extensionSlides = [
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659624/website-lending/electricien-nimes/images/veranda-extension.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'InstallationElectrique d\'un tableau électrique moderne et fonctionnel dans une maison individuelle.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659623/website-lending/electricien-nimes/images/panneaux-solaires.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'Mise en place de prises et d\'interrupteurs design dans un salon contemporain.'
        },
        {
            slideUrl: 'https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_700,w_1000,f_auto/v1683659613/website-lending/electricien-nimes/images/allee-lumineuse.jpg',
            slideAlt: 'Extension et aménagement d\'habitations',
            slideText: 'InstallationElectrique de luminaires encastrés pour créer une ambiance chaleureuse dans une cuisine ouverte.'
        }
    ]

    return (
        <Layout>
            <main className="support-page-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Réalisations de projets électriques commerciaux à Nîmes : découvrez notre expertise</h1>
                            <p>Notre équipe d'électriciens à Nîmes est fière de vous présenter nos réalisations en
                                matière de projets électriques commerciaux. Nous mettons notre expertise et notre
                                savoir-faire au service des professionnels pour leur offrir des solutions électriques
                                adaptées à leurs besoins. Découvrez notre galerie de photos de projets réalisés et les
                                témoignages de clients satisfaits pour vous faire une idée de la qualité de notre
                                travail et de l'engagement de notre équipe.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Construction neuve</h2>
                            <p>Dans le cadre de la construction de maisons neuves, notre équipe d'électriciens à Nîmes
                                intervient pour concevoir et réaliser des installations électriques conformes aux normes
                                en vigueur et adaptées à vos besoins. Découvrez quelques exemples de nos réalisations en
                                matière d'installations électriques pour des constructions neuves :</p>
                        </div>
                        <ImageSlider slides={newConstructionSlides}/>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Rénovation électrique</h2>
                            <p>La rénovation électrique est essentielle pour garantir la sécurité et la performance de
                                votre installation électrique. Notre équipe d'électriciens à Nîmes est spécialisée dans
                                les travaux de rénovation électrique pour améliorer la qualité de vie de nos clients.
                                Découvrez quelques exemples de nos réalisations en matière de rénovation électrique
                                :</p>
                        </div>
                        <ImageSlider slides={renovationSlides}/>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Extension et aménagement</h2>
                            <p>Les extensions et aménagements de votre habitation nécessitent souvent une adaptation de
                                votre installation électrique. En tant qu'électricien à Nîmes, nous vous accompagnons
                                dans ces projets pour garantir une intégration harmonieuse et sécurisée de vos
                                équipements électriques. Découvrez quelques exemples de nos réalisations en matière
                                d'extension et d'aménagement :</p>
                        </div>
                        <ImageSlider slides={extensionSlides}/>
                    </div>
                </section>
                <Testimonials/>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>Faites confiance à notre équipe d'électriciens à Nîmes pour réaliser vos <strong>projets
                                électriques commerciaux</strong>. Notre expertise et notre savoir-faire vous garantissent des
                                installations sécurisées et performantes, adaptées à vos besoins spécifiques. N'hésitez
                                pas à nous contacter pour discuter de votre projet ou demander un devis personnalisé.
                                Nous sommes impatients de vous accompagner et de vous apporter notre expertise en
                                électricité pour les professionnels à Nîmes.</p>

                            <p>Ne perdez plus de temps à chercher un électricien compétent et sérieux pour vos <strong>projets
                                commerciaux</strong>. En faisant appel à notre entreprise d'électricité, vous bénéficiez de
                                l'expérience et du professionnalisme d'une équipe dédiée à la réussite de vos projets.
                                Notre engagement envers la qualité et la sécurité de nos installations est la garantie
                                d'un travail réalisé dans les règles de l'art et conforme à vos attentes.</p>

                            <p>Pour en savoir plus sur nos services et discuter de votre projet, n'hésitez pas à nous
                                contacter dès aujourd'hui. Ensemble, nous trouverons les meilleures solutions pour
                                répondre à vos <strong>besoins en matière d'électricité</strong> et d'éclairage pour votre établissement
                                commercial. Faites le choix d'une entreprise reconnue à Nîmes pour assurer la réussite
                                de vos projets électriques commerciaux ou <Link to={'/realisations/projets-industriels/'}>industriels <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link>.</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
