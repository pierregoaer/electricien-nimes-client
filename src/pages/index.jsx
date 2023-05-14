import React from 'react';

import Layout from "../components/Layout";
import HomeHero from '../components/HomeHero.jsx';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import HomeFAQ from '../components/HomeFAQ';

import '../styles/global.css'

export function Head() {
    return (
        <>
            <title>Électricien Nîmes : Services & Réalisations | Votre Expert Local</title>
            <meta name="description" content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Électricien Nîmes : Services & Réalisations | Votre Expert Local"/>
            <meta property="og:description" content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/electricien.png"/>
        </>
    )
}

export default function Home() {
    return (
        <>
            <Layout>
                <HomeHero/>
                <HomeAboutUs/>
                <HomeServices/>
                <Testimonials/>
                <HomeFAQ/>
            </Layout>
        </>
    );
}
