import React from 'react';
import {Link} from 'gatsby';

import Layout from "../components/Layout";
import * as styles from '../styles/about-us.module.css';

export function Head() {
    return (
        <>
            <html lang="fr" />
            <link rel="alternate" href="https://eletricien-nimes.com/a-propos" hrefLang="fr"/>
            <title>À Propos de Notre Entreprise Électrique à Nîmes | Qualité & Sécurité</title>
            <meta name="description" content="Découvrez notre entreprise d'électriciens à Nîmes : certifications, compétences, valeurs et engagement envers la qualité et la sécurité de nos clients."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/a-propos"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="À Propos de Notre Entreprise Électrique à Nîmes | Qualité & Sécurité"/>
            <meta property="og:description" content="Découvrez notre entreprise d'électriciens à Nîmes : certifications, compétences, valeurs et engagement envers la qualité et la sécurité de nos clients."/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/a-propos.png"/>
        </>
    )
}

export default function AboutUs() {
    return (
        <Layout>
            <section className="about-us-page-hero">
                <div className="section-inner hero-section-padding">
                    <div className={styles.aboutUsIntroText}>
                        <h1>Certifications, formations et compétences</h1>
                    </div>
                </div>
            </section>
            <section className="about-us-certifications-container">
                <div className="section-inner about-us-certifications-main secondary-section-padding">
                    <div className={styles.aboutUsText}>
                        <p>Notre entreprise d'électricité à Nîmes dispose de plusieurs certifications et qualifications
                            professionnelles qui témoignent de notre expertise et de notre sérieux :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p><span className="bold">Qualification Qualifelec :</span> cette certification
                                atteste de notre compétence en matière d'installation électrique et garantit la qualité
                                de
                                nos prestations.</p><
                            /div>
                        <div className="numbered-list-card">
                            <p><span className="bold">Certification RGE (Reconnu Garant de
                                l'Environnement) :</span> nous sommes engagés dans une démarche écoresponsable et
                                proposons des
                                solutions énergétiquement efficaces.</p>
                        </div>
                        <div className="numbered-list-card">
                            <p><span className="bold">Formation professionnelle continue :</span> notre
                                équipe suit régulièrement des formations pour se tenir à jour des dernières évolutions
                                techniques et réglementaires du secteur de l'électricité.</p>
                        </div>
                    </div>
                    <div className={styles.aboutUsText}>
                        <p>Nous maîtrisons un large éventail de compétences techniques pour répondre à vos besoins en
                            matière d'électricité à Nîmes :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p>Installation, rénovation et dépannage électrique pour les particuliers et les
                                professionnels</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Mise en conformité des installations électriques et remplacement de tableaux
                                électriques</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Installation et conseil en éclairage, domotique et objets connectés</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Diagnostic et réparation de pannes électriques</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us-values-container">
                <div className="section-inner about-us-values-main secondary-section-padding">
                    <div className={styles.aboutUsText}>
                        <h2>Valeurs et engagement envers la qualité et la sécurité</h2>
                        <p>La qualité de nos prestations est au cœur de nos préoccupations. Nous nous engageons à :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p>Utiliser des matériaux et des équipements de qualité, provenant de marques reconnues</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Assurer un travail soigné et respectueux des normes en vigueur</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Offrir un service après-vente réactif et efficace pour assurer votre satisfaction</p>
                        </div>
                    </div>
                    <div className={styles.aboutUsText}>
                        <p>La sécurité est une priorité absolue pour notre entreprise d'électricité à Nîmes. Nous
                            mettons tout en œuvre pour garantir la sécurité de nos clients et de nos électriciens :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p>Respect des normes de sécurité et des règles de l'art lors de nos interventions</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Utilisation d'équipements de protection individuelle (EPI) par nos électriciens</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Formation régulière de notre équipe aux bonnes pratiques de sécurité</p>
                        </div>
                    </div>
                    <div className={styles.aboutUsText}>
                        <p>Nous sommes convaincus que la réussite de notre entreprise d'électricité à Nîmes repose sur
                            des valeurs humaines et un service personnalisé. C'est pourquoi nous nous engageons à :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p>Écouter et comprendre les besoins de nos clients pour leur proposer des solutions
                                adaptées</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Instaurer une relation de confiance et de transparence avec nos clients</p>
                        </div>
                        <div className="numbered-list-card">
                            <p>Assurer un suivi personnalisé tout au long de nos interventions</p>
                        </div>
                    </div>
                    <div className={styles.aboutUsText}>
                        <p>En choisissant notre entreprise d'électricité à Nîmes, vous bénéficiez de l'expertise de
                            professionnels compétents, certifiés et engagés envers la qualité et la sécurité. Nous
                            mettons un point d'honneur à offrir un service personnalisé et humain pour répondre au mieux
                            à vos attentes et garantir votre satisfaction. Faites confiance à notre équipe
                            d'électriciens pour tous vos projets électriques à Nîmes et bénéficiez de prestations de
                            qualité, réalisées dans le respect des normes et des règles de l'art. N'hésitez pas à nous
                            contacter pour en savoir plus sur nos services et obtenir un devis personnalisé.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
