import React from 'react';
import {Link} from "gatsby";

import * as styles from '../../styles/support-page.module.css'
import Layout from "../../components/Layout";

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Éclairage à Nîmes | Solutions Intérieures & Extérieures, LED et Domotique | Électricien Nîmes</title>
            <meta name="description"
                  content="InstallationElectrique d'éclairage intérieur et extérieur à Nîmes, conseils pour économies d'énergie, éclairage LED et domotique. Faites briller vos espaces !"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/services/eclairage"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Éclairage à Nîmes | Solutions Intérieures & Extérieures, LED et Domotique |  Électricien Nîmes"/>
            <meta property="og:description"
                  content="InstallationElectrique d'éclairage intérieur et extérieur à Nîmes, conseils pour économies d'énergie, éclairage LED et domotique. Faites briller vos espaces !"/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/eclairage-electrique.png"/>
        </>
    )
}

export default function Lighting() {
    return (
        <Layout>
            <main className="support-page-service-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Éclairage à Nîmes : InstallationElectrique d'éclairage intérieur et extérieur, conseils en
                                éclairage et
                                économies d'énergie, éclairage LED et domotique</h1>
                            <p>L'éclairage est un élément essentiel dans nos vies, que ce soit pour notre confort ou
                                notre sécurité. En tant qu'électricien à Nîmes, nous vous proposons des services de
                                qualité pour l'<strong>installation d'éclairage</strong> intérieur et extérieur. Nous
                                fournissons
                                également des conseils personnalisés pour optimiser votre éclairage et réaliser des
                                économies d'énergie. Découvrez notre offre complète et laissez-vous séduire par notre
                                expertise et notre savoir-faire en matière d'éclairage à Nîmes.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>InstallationElectrique d'éclairage intérieur et extérieur</h2>
                            <p><strong>Un éclairage adapté</strong> est indispensable pour garantir votre confort et
                                votre sécurité, que
                                ce soit à l'intérieur de votre maison ou dans vos espaces extérieurs. Il permet de créer
                                une ambiance chaleureuse, de mettre en valeur vos espaces de vie et de faciliter vos
                                déplacements.</p>

                            <p>En tant qu'électricien à Nîmes, nous vous proposons des <strong>solutions d'éclairage
                                intérieur</strong>
                                sur mesure, incluant :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>L'installation de luminaires encastrés, suspendus ou sur rail</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>L'éclairage d'accentuation pour mettre en valeur vos objets décoratifs</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>L'éclairage fonctionnel pour vos espaces de travail, cuisine ou salle de bains</p>
                            </li>
                        </ul>
                        <div className={styles.supportPageText}>
                            <p>Pour vos espaces extérieurs, nous vous proposons également des <strong>solutions
                                d'éclairage
                                adaptées</strong> à vos besoins :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>L'éclairage de sécurité</strong> pour prévenir les intrusions et faciliter
                                    vos déplacements de luminaires encastrés, suspendus ou sur rail</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>L'éclairage d'ambiance</strong> pour sublimer votre jardin ou votre terrasse
                                    d'accentuation pour mettre en valeur vos objets décoratifs</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>L'éclairage architectural</strong> pour mettre en valeur les éléments de
                                    votre façade</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Conseils en éclairage et économies d'énergie</h2>
                            <p><strong>Un éclairage bien pensé</strong> permet d'améliorer votre confort, de valoriser
                                vos espaces de vie
                                et de réaliser des économies d'énergie. En tant qu'électricien à Nîmes, nous vous
                                accompagnons dans le choix de vos luminaires et vous conseillons sur les <strong>meilleures
                                    solutions d'éclairage</strong> en fonction de vos besoins et de votre budget.</p>
                            <p>Pour optimiser votre éclairage et réaliser des économies d'énergie, nous vous donnerons
                                des conseils sur :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>Choisir des ampoules à faible consommation, telles que les ampoules LED</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>Utiliser des variateurs d'intensité pour adapter l'éclairage à vos besoins</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>staller des détecteurs de présence pour éviter de gaspiller de l'énergie</p>
                            </li>
                        </ul>

                        <div className={styles.supportPageText}>
                            <p>Pour calculer les économies d'énergie réalisées grâce à nos conseils en éclairage, nous
                                vous proposons un bilan énergétique personnalisé et des simulations pour estimer les
                                économies potentielles sur votre facture d'électricité. Nous pourrons ainsi <Link
                                    to={'/services/renovation-et-mise-aux-normes'}>rénover
                                    votre installation <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                    </svg></Link> en fonction de votre bilan énergétique.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Éclairage LED et domotique</h2>
                            <p>L'éclairage LED présente de nombreux avantages, en particulier pour les <strong>économies
                                d'énergie</strong> et la durabilité :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>Faible consommation d'énergie</strong> : les ampoules LED consomment jusqu'à
                                    80 % d'énergie en
                                    moins que les ampoules traditionnelles.</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>Longue durée de vie</strong> : les ampoules LED ont une durée de vie pouvant
                                    atteindre 50 000
                                    heures, réduisant ainsi les coûts de remplacement.</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>Qualité de lumière</strong> : les LED offrent une lumière de qualité et un
                                    excellent rendu des
                                    couleurs.</p>
                            </li>
                        </ul>
                        <div className={styles.supportPageText}>
                            <p><Link to={'/services/domotique-et-objets-connectes'}>La domotique <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                            </svg></Link> permet de contrôler et de gérer votre <strong>éclairage à distance</strong>,
                                en utilisant une
                                application sur votre smartphone ou une interface dédiée. En tant qu'électricien à
                                Nîmes, nous vous proposons des solutions d'<strong>éclairage connecté</strong> pour
                                améliorer votre
                                confort et votre sécurité :
                            </p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>Contrôle à distance de l'éclairage</strong> : allumez, éteignez ou ajustez
                                    l'intensité de vos
                                    luminaires depuis votre smartphone ou votre tablette.</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>L'éclairage d'accentuation</strong> : permet de mettre en valeur vos objets
                                    décoratifs</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><strong>Détecteurs de mouvement et de luminosité</strong> : adaptez automatiquement
                                    l'éclairage en
                                    fonction de la présence de personnes ou des conditions de luminosité.</p>
                            </li>
                        </ul>
                        <div className={styles.supportPageText}>
                            <p>Pour intégrer l'éclairage LED et la domotique dans votre projet d'éclairage à Nîmes, il
                                suffit de nous contacter pour un devis personnalisé. Nous vous proposerons des solutions
                                adaptées à vos besoins et à votre budget, en tenant compte de vos attentes en termes de
                                confort, d'économies d'énergie, de sécurité et en fonction de <Link
                                    to={'/services/installation-electrique'}>votre installation électrique <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                                </svg></Link>.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>
                                En tant qu'électricien à Nîmes, nous mettons notre expertise et notre savoir-faire à
                                votre service pour vous accompagner dans votre <strong>projet d'éclairage</strong>. Que
                                ce soit pour
                                l'installation d'éclairage intérieur ou extérieur, des conseils en éclairage et
                                économies d'énergie, ou encore la mise en place d'éclairage LED et de solutions
                                domotiques, nous vous proposons des prestations de qualité adaptées à vos besoins et à
                                votre budget.
                            </p>

                            <p>
                                N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour votre <strong>projet
                                d'éclairage</strong> à Nîmes. Nous nous engageons à vous fournir un service
                                professionnel et
                                humain, pour vous aider à améliorer votre confort et à réaliser des économies d'énergie
                                grâce à des solutions d'éclairage modernes et performantes. Bien évidemment nous sommes
                                aussi là pour assurer le suivi de votre <Link to={'/services/depannage-et-maintenance'}>projet d’éclairage <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg></Link>.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
