import React from 'react';
import Layout from "../components/Layout";

import * as styles from '../styles/legal-mentions.module.css';

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>Blog électricité à Nîmes | Découvrez nos conseils en électricité</title>
            <meta name="description"
                  content="Parcourez tous nos conseils pour vos projets électriques. Faites confiance à nos électriciens."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/blog"/>
            <meta property="og:type" content="blog"/>
            <meta property="og:title" content="Blog électricité à Nîmes |  Découvrez nos conseils en électricité"/>
            <meta property="og:description"
                  content="Parcourez tous nos conseils pour vos projets électriques. Faites confiance à nos électriciens."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/conseils-electricite.png"/>
        </>
    )
}

export default function LegalMentions() {
    return (
        <Layout>
            <main className={styles.legalMentions}>
                <h1>Mentions Légales</h1>
                <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
                    Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
                    visiteurs, ci-après l'"<strong>Utilisateur</strong>", du site https://electricien-nimes.com , ci-après le
                    "Site", les présentes mentions légales.</p>
                <p>La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans
                    réserve des présentes mentions légales.</p>
                <p>Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>
                <h2>ARTICLE 1 - L'ÉDITEUR</h2>
                <ul>
                    <li><strong>Propriétaire</strong> : Antoine DAUPHIN</li>
                    <li><strong>Responsable publication</strong> : Antoine DAUPHIN – dauphin.antoine.ad@gmail.com. Le responsable publication est une personne physique ou une personne morale.</li>
                    <li><strong>Webmaster</strong> : Pierre GOAER – hello@pierregoaer.com</li>
                    <li><strong>Hébergeur</strong> : o2switch – 222 Boulevard Gustave Flaubert 63000 Clermont-Ferrand 04 44 44 60 40 ci-après l'"<strong>Éditeur</strong>".</li>
                </ul>

                <h2>ARTICLE 2 - L'HÉBERGEUR</h2>
                <p>L'hébergeur du Site est la société O2SWITCH, dont le siège social est situé au Chemin des Pardiaux
                    63000 Clermont-Ferrand.</p>

                <h2>ARTICLE 3 - ACCÈS AU SITE</h2>
                <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
                    programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
                <p>En cas de modification, interruption ou suspension du Site, l'Éditeur ne saurait être tenu responsable.</p>

                <h2>ARTICLE 4 - COLLECTE DES DONNEES</h2>
                <p>Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le
                    respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
                    fichiers et aux libertés.</p>
                <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un
                    droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur
                    exerce ce droit via un formulaire de contact.</p>
                <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du
                    Site, sans autorisation de l’Éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires
                    telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>


            </main>
        </Layout>
    )
}
