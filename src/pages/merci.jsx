import React from 'react';
import Layout from "../components/Layout";
import * as styles from "../styles/special-page.module.css"

export function Head() {
    return (
        <>
            <html lang="fr" />
            <link rel="alternate" href="https://eletricien-nimes.com" hrefLang="fr"/>
            <title>404 - Cette page n'existe pas</title>
            <meta name="description" content="404 - Cette page n'existe pas"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="404 - Cette page n'existe pas"/>
            <meta property="og:description" content="404 - Cette page n'existe pas"/>
            <meta property="og:image" content=""/>
        </>
    )
}

export default function Merci() {
    return (
        <Layout>
            <div className={styles.specialPage}>
                <h1>Votre message a bien été envoyé !</h1>
                <p>Nous vous recontacterons très prochainement.</p>
            </div>
        </Layout>
    );
}