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
            <html lang="fr"/>
            <title>Électricien Nîmes : Services & Réalisations | Votre Expert en électricité</title>
            <meta name="description"
                  content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Électricien Nîmes : Services & Réalisations | Votre Expert en électricité"/>
            <meta property="og:description"
                  content="Découvrez nos électriciens à Nîmes : installations, rénovations, dépannages et plus encore. Faites confiance à notre équipe pour vos projets électriques."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/electricien.png"/>
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
                <Testimonials testimonials={[
                    {
                        quote: "Du début à la fin, l'équipe a été à l'écoute de nos besoins et a su nous conseiller sur les meilleures solutions pour notre installation électrique. Le résultat est à la hauteur de nos attentes : une installation performante, sécurisée et esthétique. Nous les recommandons sans hésiter !",
                        name: "Stéphanie et Laurent",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-1.webp"
                    },
                    {
                        quote: "Leurs conseils et leur expertise nous ont permis de moderniser notre installation tout en respectant le cachet de notre habitation. La sécurité de notre famille est désormais assurée grâce à leur travail soigné et professionnel. Merci à toute l'équipe !",
                        name: "Mathilde et Pierre",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-2.webp"
                    },
                    {

                        quote: "Suite à l'agrandissement de notre maison, nous avons fait appel à cette entreprise. Ils ont su nous proposer des solutions adaptées à notre projet et à notre budget. Le résultat est impeccable et nous sommes ravis de pouvoir profiter pleinement de notre nouvel espace de vie !",
                        name: "Sandrine et Guillaume",
                        image: "https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_80,w_80/v1683642961/website-lending/electricien-nimes/testimonials/testimonial-3.webp"
                    }
                ]}/>
                <HomeFAQ/>
            </Layout>
        </>
    );
}
