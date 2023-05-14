import React from 'react';
import {Link} from "gatsby";

import * as styles from '../../styles/support-page.module.css'
import Layout from "../../components/Layout";

export function Head() {
    return (
        <>
            <title>Rénovation Électrique à Nîmes | Mise aux Normes & Réparation</title>
            <meta name="description" content="Besoin d'une rénovation électrique à Nîmes ? Nos experts assurent mise aux normes, remplacement de tableaux et réparation de circuits. Contactez-nous !"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/services/renovation-et-mise-aux-normes"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Rénovation Électrique à Nîmes | Mise aux Normes & Réparation"/>
            <meta property="og:description" content="Besoin d'une rénovation électrique à Nîmes ? Nos experts assurent mise aux normes, remplacement de tableaux et réparation de circuits. Contactez-nous !"/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849343/website-lending/electricien-nimes/meta-images/renovation-electrique.png"/>
        </>
    )
}

export default function Renovation() {
    return (
        <Layout>
            <main className="support-page-service-container">
                <section className="support-page-hero">
                    <div className="hero-section-padding">
                        <div className="support-page-text-block">
                            <h1>Rénovation à Nîmes : Mise aux normes, remplacement de tableaux et réparation de
                                circuits</h1>
                            <p>La rénovation électrique est une étape cruciale pour garantir la sécurité et la
                                performance de votre installation électrique. En tant qu'électricien à Nîmes, nous vous
                                proposons des services de rénovation adaptés à vos besoins. Nous vous proposons la mise
                                aux normes, le remplacement de tableaux électriques et la réparation de circuits
                                électriques. Laissez-vous convaincre par notre expertise et notre professionnalisme.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Mise aux normes</h2>
                            <p>La mise aux normes de votre installation électrique est essentielle pour assurer la
                                sécurité de votre habitation ou de vos locaux professionnels. Une installation non
                                conforme aux normes en vigueur peut présenter des risques d'incendie, d'électrocution ou
                                de surtension. De plus, en cas d'accident, votre assurance peut ne pas prendre en charge
                                les dommages si votre installation n'est pas aux normes.</p>

                            <p>Pour vérifier si votre installation électrique doit être mise aux normes, il est
                                recommandé de faire appel à un électricien professionnel à Nîmes. Celui-ci pourra
                                réaliser un diagnostic complet de votre installation et vous informer des travaux
                                nécessaires pour la mettre en conformité avec les normes en vigueur.</p>

                            <p>Les installations électriques doivent respecter la norme NF C 15-100, qui garantit la
                                sécurité et la performance des équipements électriques. En tant qu'électricien à Nîmes,
                                nous veillons à respecter cette norme lors de la réalisation de vos travaux de mise aux
                                normes.</p>

                            <p>La mise aux normes de votre installation électrique implique plusieurs étapes, dont :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Le diagnostic de l'installation existante et la proposition de solutions adaptées à
                                    votre situation</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Le remplacement ou la mise en conformité des équipements non conformes</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>La vérification de la conformité de l'installation une fois les travaux réalisés</p>
                            </li>
                        </ul>

                    </div>
                </section>
                <section className="inverted-section">
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Remplacement de tableaux électriques</h2>
                            <p>Le tableau électrique est le cœur de votre installation électrique. Un tableau vétuste ou
                                non conforme peut présenter des risques pour votre sécurité et celle de votre
                                habitation. Le remplacement de votre tableau électrique peut être nécessaire pour :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Améliorer la sécurité de votre installation</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Augmenter la capacité de votre installation en cas d'ajout d'équipements électriques</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Faciliter la gestion de votre consommation électrique</p>
                            </li>
                        </ul>

                        <div className={styles.supportPageText}>
                            <p>Le remplacement d'un tableau électrique par notre équipe d'électriciens à Nîmes se
                                déroule en plusieurs étapes :</p>
                        </div>
                        <ul className="numbered-list-cards">
                            <li className="numbered-list-card">
                                Le diagnostic de votre installation et du tableau existant
                            </li>
                            <li className="numbered-list-card">
                                La proposition d'un nouveau tableau adapté à vos besoins et aux normes en vigueur
                            </li>
                            <li className="numbered-list-card">
                                L'installation du nouveau tableau et la mise en service des équipements
                            </li>
                            <li className="numbered-list-card">
                                La vérification de la conformité de l'installation
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className={styles.supportPageText}>
                            <h2>Réparation de circuits électriques</h2>
                            <p>La réparation de circuits électriques est nécessaire en cas de dysfonctionnement de votre
                                installation. Un circuit défectueux peut provoquer des pannes, une surconsommation
                                d'énergie ou des risques d'accident. Il est donc important de faire appel à un
                                électricien à Nîmes pour résoudre rapidement ces problèmes et assurer la sécurité de
                                votre habitation ou de vos locaux professionnels.</p>

                            <p>Les signes d'un circuit électrique défectueux peuvent être variés, tels que :</p>
                        </div>
                        <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des disjoncteurs qui sautent fréquemment</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des fusibles qui grillent</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des prises ou interrupteurs qui chauffent</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des variations de tension inhabituelles</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des coupures d’électricité</p>
                            </li>
                            <li className="bulleted-list-card">
                                <h4></h4>
                                <p>Des surcharges électriques</p>
                            </li>
                        </ul>
                        <div className={styles.supportPageText}>
                            <p>Si vous constatez l'un de ces signes, il est recommandé de faire appel à un électricien à
                                Nîmes. Notre expert pourra réaliser un diagnostic de votre installation et effectuer les
                                réparations nécessaires.</p>

                            <p>La réparation d'un circuit électrique par notre équipe d'électriciens à Nîmes implique
                                plusieurs étapes :</p>
                        </div>
                        <ul className="numbered-list-cards">
                            <li className="numbered-list-card">
                                Le diagnostic du circuit défectueux et l'identification de la cause du problème
                            </li>
                            <li className="numbered-list-card">
                                La proposition de solutions adaptées pour résoudre le dysfonctionnement
                            </li>
                            <li className="numbered-list-card">
                                La réalisation des travaux de réparation et la vérification du bon fonctionnement du
                                circuit
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="secondary-section-padding">
                        <div className="support-page-text-block">
                            <p>La rénovation électrique est un investissement important pour garantir la sécurité et la
                                performance de votre installation électrique. En tant qu'électricien à Nîmes, nous vous
                                proposons des services de qualité pour la mise aux normes, le remplacement de tableaux
                                électriques et la réparation de circuits électriques. Nous mettons notre expertise et
                                notre professionnalisme à votre service pour vous offrir des solutions adaptées à vos
                                besoins et des travaux réalisés dans le respect de la norme NF C 15-100.</p>

                            <p>N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour vos travaux de
                                rénovation électrique à Nîmes. Notre équipe d'électriciens qualifiés et expérimentés se
                                fera un plaisir de vous accompagner dans la réalisation de votre projet et de répondre à
                                toutes vos questions. Faites confiance à notre savoir-faire pour un service de qualité
                                et une installation électrique sécurisée et performante.</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
