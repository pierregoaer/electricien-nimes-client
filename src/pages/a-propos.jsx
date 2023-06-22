import React from 'react';
import {Link} from 'gatsby';

import Layout from "../components/Layout";
// import * as styles from '../styles/about-us.module.css';

export function Head() {
    return (
        <>
            <html lang="fr"/>
            <title>À Propos de Notre Entreprise Électrique à Nîmes | Qualité & Sécurité</title>
            <meta name="description"
                  content="Découvrez notre entreprise d'électriciens à Nîmes : certifications, compétences, valeurs et engagement envers la qualité et la sécurité de nos clients."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/a-propos"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="À Propos de Notre Entreprise Électrique à Nîmes | Qualité & Sécurité"/>
            <meta property="og:description"
                  content="Découvrez notre entreprise d'électriciens à Nîmes : certifications, compétences, valeurs et engagement envers la qualité et la sécurité de nos clients."/>
            <meta property="og:image"
                  content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/a-propos.png"/>
        </>
    )
}

export default function AboutUs() {
    return (
        <Layout>
            <section className="about-us-page-hero">
                <div className="section-inner hero-section-padding">
                    <div className="about-us-text-block">
                        <h1>À propos de notre entreprise d'électricité à Nîmes : compétences et engagements.</h1>
                        <p>Notre entreprise d'électricité à Nîmes se distingue par son expertise, ses compétences et ses
                            valeurs. Nous sommes fiers de mettre notre savoir-faire au service de nos clients pour leur
                            offrir des prestations de qualité et garantir leur satisfaction. Découvrez nos
                            certifications, nos formations et nos compétences, ainsi que notre engagement envers la
                            qualité et la sécurité dans le domaine de l'électricité.</p>
                    </div>
                </div>
            </section>
            <section className="about-us-certifications-container">
                <div className="section-inner about-us-certifications-main secondary-section-padding">
                    <div className="about-us-text-block">
                        <h2>Certifications, formations et compétences</h2>
                        <p>Notre entreprise d'électricité à Nîmes dispose de plusieurs certifications et qualifications
                            professionnelles qui témoignent de notre expertise et de notre sérieux :</p>
                    </div>
                    <div className="numbered-list-cards">
                        <div className="numbered-list-card">
                            <p><strong>Qualification Qualifelec :</strong> cette certification
                                atteste de notre compétence en matière d'installation électrique et garantit la qualité
                                de
                                nos prestations.</p>
                            <img src="https://res.cloudinary.com/dg8awj55m/image/upload/v1683644996/website-lending/electricien-nimes/about/qualifelec.jpg" alt=""/>
                        </div>
                        <div className="numbered-list-card">
                            <p><strong>Certification RGE (Reconnu Garant de
                                l'Environnement) :</strong> nous sommes engagés dans une démarche écoresponsable et
                                proposons des
                                solutions énergétiquement efficaces.</p>
                            <img src="https://res.cloudinary.com/dg8awj55m/image/upload/v1683644996/website-lending/electricien-nimes/about/certification-qualibat.png" alt=""/>
                        </div>
                        <div className="numbered-list-card">
                            <p><strong>Formation professionnelle continue :</strong> notre
                                équipe suit régulièrement des formations pour se tenir à jour des dernières évolutions
                                techniques et réglementaires du secteur de l'électricité.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4Z M5 16V22H3V10C3 8.34315 4.34315 7 6 7C6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057L12.7931 7.79289L14.2073 9.20711L10.5201 12.8943L9 11.4587V22H7V16H5Z M10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="about-us-text-block">
                        <p>Nous maîtrisons un large éventail de compétences techniques pour répondre à vos besoins en
                            matière d'électricité à Nîmes :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><Link to={'/services/installation-electrique/'}>Installation</Link>, <Link to={'/services/renovation-et-mise-aux-normes/'}>rénovation</Link> et <Link to={'/services/depannage-et-maintenance/'}>dépannage</Link> électrique pour les particuliers et les professionnels</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p><Link to={'/services/renovation-et-mise-aux-normes/'}>Mise en conformité</Link> des installations électriques et remplacement de tableaux électriques</p>
                            </li>
                            <li className="bulleted-list-card bulleted-list-card-3">
                                <h4></h4>
                                <p>Installation et conseil en <Link to={'/services/eclairage/'}>éclairage</Link>, <Link to={'/services/domotique-et-objets-connectes/'}>domotique et objets connectés</Link></p>
                            </li>
                        </ul>
                </div>
            </section>
            <section className="about-us-values-container">
                <div className="section-inner about-us-values-main secondary-section-padding">
                    <div className="about-us-text-block">
                        <h2>Valeurs et engagement envers la qualité et la sécurité</h2>
                        <p>La qualité de nos prestations est au cœur de nos préoccupations. Nous nous engageons à :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 56 56">
                                <path
                                    d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/>
                            </svg>
                            <p>Utiliser des matériaux et des équipements de qualité, provenant de marques reconnues</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                <path
                                    d="M678.584675 765.172506v157.995691l75.697852 31.505938V723.768586a429.379161 429.379161 0 0 1-75.697852 41.40392zM269.717473 723.768586V953.098138l75.697852-31.505938v-156.419694a429.309162 429.309162 0 0 1-75.697852-41.40392zM511.999 798.78444a428.955162 428.955162 0 0 1-105.993793-13.241974v238.457534L511.999 979.886086 617.992793 1023.998V785.542466A429.025162 429.025162 0 0 1 511.999 798.78444zM511.999 0C308.479398 0 142.903721 165.575677 142.903721 369.097279S308.479398 738.192558 511.999 738.192558s369.097279-165.575677 369.097279-369.097279S715.520602 0 511.999 0z m0 660.198711c-161.345685 0-292.611428-131.265744-292.611428-292.611429 0-161.347685 131.265744-292.613428 292.611428-292.613428s292.611428 131.265744 292.611428 292.613428c0 161.347685-131.263744 292.611428-292.611428 292.611429zM511.999 135.563735c-127.93575 0-232.021547 104.083797-232.021547 232.023547S384.06325 599.606829 511.999 599.606829s232.021547-104.083797 232.021547-232.021547c0-127.93775-104.083797-232.021547-232.021547-232.021547zM607.360814 502.999018L511.999 452.865115 416.639186 502.999018l18.211965-106.183793-77.14785-75.199853 106.617792-15.49397L511.999 209.509591l47.679907 96.611811 106.617792 15.49397-77.14785 75.199853 18.211965 106.183793z"/>
                            </svg>
                            <p>Assurer un travail soigné et respectueux des normes en vigueur</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
                            </svg>
                            <p>Offrir un service après-vente réactif et efficace pour assurer votre satisfaction</p>
                        </li>
                    </ul>
                    <div className="about-us-text-block">
                        <p>La sécurité est une priorité absolue pour notre entreprise d'électricité à Nîmes. Nous
                            mettons tout en œuvre pour garantir la sécurité de nos clients et de nos électriciens :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5C14.5 9.88071 13.3807 11 12 11ZM7.52746 16C7.77619 13.75 9.68372 12 12 12C14.3163 12 16.2238 13.75 16.4725 16H7.52746Z"></path>
                            </svg>
                            <p>Respect des normes de sécurité et des règles de l'art lors de nos interventions</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349.667 349.667">
                                <path
                                    d="M174.834,197.204c24.125,0,80.846-29.034,80.846-98.603c0-9.703-0.237-19.076-1.036-27.933   c-1.313-17.433-4.884-32.883-13.775-44.724C229.468,9.836,209.52,0,174.834,0c-34.688,0-54.637,9.837-66.038,25.948   c-8.885,11.834-12.456,27.273-13.77,44.694c-0.802,8.865-1.039,18.247-1.039,27.96C93.987,168.17,150.709,197.204,174.834,197.204z    M201.223,36.123c-2.355,5.951-3.534,8.927-5.89,14.877c-15.209-4.297-25.791-4.297-41,0c-2.356-5.95-3.534-8.926-5.89-14.877   C167.462,30.365,182.205,30.366,201.223,36.123z M106.015,83.514c0.929,2.034,4.886,9.872,11.014,10.607   c7.04,0.845,18.727-24.935,57.804-24.998c39.077,0.063,50.764,25.843,57.804,24.998c6.127-0.735,10.085-8.574,11.014-10.607   c0.19,4.994,0.26,10.048,0.26,15.088c0,34.005-15.016,55.075-27.612,66.762c-15.872,14.727-33.494,20.072-41.466,20.072   c-7.972,0-25.594-5.345-41.466-20.072c-12.597-11.687-27.612-32.757-27.612-66.762C105.755,93.562,105.825,88.507,106.015,83.514z"/>
                                <path
                                    d="M324.926,298.327c-4.128-25.665-12.624-58.724-29.667-70.472c-11.638-8.024-52.243-29.718-69.582-38.982l-0.3-0.16   c-1.982-1.059-4.403-0.847-6.17,0.541c-9.083,7.131-19.033,11.937-29.573,14.284c-1.861,0.415-3.391,1.738-4.067,3.521   l-10.732,28.291l-10.733-28.291c-0.677-1.783-2.205-3.106-4.067-3.521c-10.54-2.347-20.49-7.153-29.573-14.284   c-1.769-1.388-4.188-1.601-6.17-0.541c-17.134,9.155-58.235,31.291-69.831,39.107c-19.619,13.217-28.198,61.052-29.719,70.507   c-0.15,0.938-0.063,1.897,0.254,2.792c0.702,1.982,18.708,48.548,149.839,48.548c131.131,0,149.137-46.566,149.839-48.548   C324.989,300.224,325.077,299.264,324.926,298.327z M255.649,277.337l-12.655,27.928c-0.206,0.452-0.656,0.735-1.142,0.735   c-0.063,0-0.125-0.004-0.188-0.014c-0.555-0.084-0.986-0.526-1.057-1.083l-2.33-18.468h-5.821c-0.335,0-0.655-0.134-0.892-0.373   c-0.235-0.236-0.366-0.559-0.362-0.894l0.281-27.927c0.007-0.688,0.566-1.242,1.254-1.242h19.732c0.398,0,0.773,0.19,1.009,0.51   c0.236,0.319,0.307,0.732,0.19,1.113l-5.515,17.942h6.353c0.427,0,0.824,0.217,1.055,0.575   C255.793,276.498,255.825,276.949,255.649,277.337z"/>
                            </svg>
                            <p>Utilisation d'équipements de protection individuelle (EPI) par nos électriciens</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4Z M5 16V22H3V10C3 8.34315 4.34315 7 6 7C6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057L12.7931 7.79289L14.2073 9.20711L10.5201 12.8943L9 11.4587V22H7V16H5Z M10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
                            </svg>
                            <p>Formation régulière de notre équipe aux bonnes pratiques de sécurité</p>
                        </li>
                    </ul>
                    <div className="about-us-text-block">
                        <p>Nous sommes convaincus que la réussite de notre entreprise d'électricité à Nîmes repose sur
                            des valeurs humaines et un service personnalisé. C'est pourquoi nous nous engageons à :</p>
                    </div>
                    <ul className="bulleted-list-cards">
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path id="Vector"
                                      d="M11 17H20M8 15L5.5 18L4 17M11 12H20M8 10L5.5 13L4 12M11 7H20M8 5L5.5 8L4 7"
                                      stroke="#d20d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Écouter et comprendre les besoins de nos clients pour leur proposer des solutions
                                adaptées</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path className="st0"
                                      d="M324.708,174.596c-12.583-2.092-41.546-2.322-65.932,2.992c-1.562-1.032-3.128-2.099-4.672-3.048   c-4.714-2.887-9.337-5.328-13.929-7.168c-4.452-1.771-8.891-2.991-13.535-3.236v-0.02c-6.956-0.565-13.709-0.816-19.918-0.816   c-9.453,0.014-17.517,0.537-23.493,1.534h0.024c-0.826,0.126-1.732,0.203-2.716,0.203c-5.164,0.062-12.312-2.392-18.797-5.935   c-4.372-2.343-9.79-1.102-12.705,2.915L77.86,260.171c-2.424,3.34-2.511,7.866-0.227,11.311c1.806,2.706,3.316,5.515,4.313,8.326   c1.433,3.968,3.508,7.573,5.903,11.081c2.398,3.493,5.136,6.882,7.994,10.118l1.12,1.073c0,0,5.125,4.226,13.291,10.948   c-2.131,3.055-3.302,6.681-3.344,10.502c-0.052,5.035,1.855,9.805,5.384,13.41c3.584,3.661,8.375,5.676,13.497,5.676   c3.588,0,7.018-1.032,10.006-2.922c-1.997,3.012-3.106,6.52-3.148,10.209c-0.056,5.035,1.858,9.798,5.383,13.396   c3.577,3.668,8.372,5.683,13.497,5.683c4.026,0,7.837-1.311,11.052-3.654c-5.85,7.336-5.533,18.039,1.192,24.922   c3.578,3.654,8.368,5.669,13.486,5.669h0.004c4.965,0,9.658-1.917,13.228-5.411l3.49-3.466c-1.461,2.678-2.333,5.648-2.368,8.78   c-0.052,5.041,1.855,9.804,5.383,13.409c3.581,3.654,8.375,5.669,13.497,5.669c4.961,0,9.65-1.91,13.252-5.425l2.124-2.155   c1.063,0.837,2.033,1.59,2.824,2.204c0.648,0.488,1.2,0.907,1.705,1.27l0.75,0.53l1.063,0.656c3.992,2.189,7.81,3.138,10.846,3.807   c1.513,0.314,2.81,0.53,3.772,0.662l1.172,0.154l0.366,0.035l0.139,0.014l0.087,0.014l0.094,0.007l0.126,0.007   c0.115,0,0.059,0.014,0.665,0.028l0.715-0.028c6.65-0.488,12.946-2.776,18.114-6.722c2.056-1.576,3.856-3.48,5.467-5.564   c3.183,1.032,6.554,1.645,10.062,1.645c14.228-0.006,26.202-9.079,30.839-21.7c0.516-0.035,1.029-0.056,1.537-0.188   c1.806,0.328,3.637,0.565,5.533,0.565c14.118-0.014,26.066-8.911,30.78-21.366c0.032-0.028,0.063-0.041,0.094-0.063l1.108,0.105   c18.238,0,33.001-14.777,33.008-33.004c0.011-5.063-0.69-10.662-2.618-16.485c12.517-11.059,30.86-28.144,34.176-37.418   c1.597-4.463,10.575-15.166,13.183-18.814l-70.621-97.394C351.848,165.377,334.369,176.214,324.708,174.596z M366.923,330.384   c-0.01,7.287-5.906,13.186-13.194,13.2c-1.806,0-3.493-0.362-5.065-1.018c-0.157-0.07-0.321-0.084-0.478-0.133l-12.238-14.888   c-3.096-3.584-8.518-3.988-12.106-0.893c-3.591,3.096-3.988,8.522-0.889,12.113l11.837,14.427   c-0.757,6.562-6.272,11.701-13.044,11.708c-3.215-0.007-6.066-1.15-8.399-3.068l-11.746-14.324   c-3.1-3.584-8.522-3.981-12.109-0.885c-3.592,3.096-3.986,8.522-0.89,12.105l8.183,10.196c-0.014,0.634-0.076,1.269,0.035,1.904   c0.143,0.802,0.209,1.526,0.209,2.196c-0.01,7.294-5.909,13.186-13.193,13.2c-1.904,0-3.657-0.439-5.275-1.15l-14.316-15.048   c-3.455-3.25-8.887-3.082-12.137,0.376c-3.253,3.452-3.085,8.891,0.366,12.133l6.718,7.88c-0.673,1.444-1.569,2.748-2.932,3.807   c-1.747,1.339-4.149,2.259-6.882,2.566c-0.798-0.118-1.883-0.3-3.173-0.606c-1.6-0.362-3.288-0.955-4.163-1.416   c-0.303-0.222-1.077-0.794-2.196-1.674c-0.635-0.488-1.356-1.045-2.158-1.687c1.45-6.094-0.112-12.775-4.815-17.586   c-3.581-3.661-8.375-5.676-13.497-5.676c-2.88,0-5.641,0.711-8.18,1.946l-0.076-0.063l0.087-0.098   c3.602-3.528,5.617-8.242,5.672-13.29c0.052-5.042-1.862-9.805-5.39-13.403c-3.578-3.654-8.374-5.676-13.493-5.676   c-4.003,0-7.796,1.296-10.997,3.612c2.59-3.264,4.094-7.225,4.139-11.457c0.056-5.042-1.858-9.805-5.384-13.403   c-3.58-3.668-8.374-5.683-13.496-5.683c-4.961,0-9.651,1.911-13.221,5.411l-3.183,3.166c3.926-7.113,3.02-16.22-2.943-22.314   c-3.584-3.661-8.378-5.676-13.5-5.676c-4.961,0-9.651,1.91-13.228,5.411l-2.106,2.113c-1.496-1.235-2.964-2.441-4.261-3.508   c-4.874-4.003-8.232-6.778-9.581-7.894c-2.28-2.601-4.39-5.216-6.039-7.642c-1.771-2.566-3.026-4.944-3.591-6.555   c-0.83-2.329-1.82-4.518-2.897-6.596l62.57-86.279c6.186,2.587,12.953,4.532,20.258,4.582c1.945,0,3.936-0.14,5.954-0.474h0.025   c4.166-0.711,11.592-1.27,20.205-1.255c5.68-0.014,11.928,0.223,18.315,0.739l0.436,0.028c1.569,0.042,4.181,0.6,7.353,1.883   l0.718,0.328c-26.728,12.07-64.606,35.292-77.054,39.447c-14.215,4.735-15.404,23.695,16.579,27.244   c31.989,3.563,60.419-16.589,67.525-20.131c5.101-2.552,37.508,0.565,55.458,2.531c7.915,7.817,14.853,15.069,19.912,20.55   l39.423,48.198l0.174,0.196c5.052,5.85,7.793,10.598,9.348,14.671C366.446,322.874,366.913,326.388,366.923,330.384z"/>
                                <path className="st0"
                                      d="M510.641,229.622L415.374,98.233c-2.305-3.187-6.747-3.884-9.927-1.583l-42.198,30.599   c-3.18,2.301-3.888,6.75-1.58,9.93l95.268,131.389c2.304,3.18,6.746,3.891,9.926,1.59l42.205-30.605   C512.242,237.243,512.953,232.801,510.641,229.622z M478.226,241.427c-5.293,3.835-12.705,2.65-16.548-2.643   c-3.839-5.292-2.656-12.698,2.643-16.54c5.296-3.842,12.702-2.657,16.544,2.628C484.704,230.172,483.522,237.585,478.226,241.427z"/>
                                <path className="st0"
                                      d="M148.757,127.248l-42.206-30.599c-3.173-2.301-7.618-1.604-9.926,1.583L1.354,229.622   c-2.308,3.18-1.59,7.622,1.583,9.93l42.198,30.605c3.18,2.301,7.621,1.59,9.922-1.59l95.272-131.389   C152.637,133.998,151.929,129.549,148.757,127.248z M120.554,141.92c-3.839,5.293-11.248,6.478-16.544,2.636   c-5.3-3.835-6.481-11.255-2.64-16.54c3.838-5.3,11.248-6.485,16.544-2.642C123.217,129.215,124.389,136.62,120.554,141.92z"/>
                            </svg>
                            <p>Instaurer une relation de confiance et de transparence avec nos clients</p>
                        </li>
                        <li className="bulleted-list-card bulleted-list-card-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <rect x="119.256" y="222.607" className="st0" width="50.881" height="50.885"/>
                                <rect x="341.863" y="222.607" className="st0" width="50.881" height="50.885"/>
                                <rect x="267.662" y="222.607" className="st0" width="50.881" height="50.885"/>
                                <rect x="119.256" y="302.11" className="st0" width="50.881" height="50.885"/>
                                <rect x="267.662" y="302.11" className="st0" width="50.881" height="50.885"/>
                                <rect x="193.46" y="302.11" className="st0" width="50.881" height="50.885"/>
                                <rect x="341.863" y="381.612" className="st0" width="50.881" height="50.885"/>
                                <rect x="267.662" y="381.612" className="st0" width="50.881" height="50.885"/>
                                <rect x="193.46" y="381.612" className="st0" width="50.881" height="50.885"/>
                                <path className="st0"
                                      d="M439.277,55.046h-41.376v39.67c0,14.802-12.195,26.84-27.183,26.84h-54.025   c-14.988,0-27.182-12.038-27.182-26.84v-39.67h-67.094v39.297c0,15.008-12.329,27.213-27.484,27.213h-53.424   c-15.155,0-27.484-12.205-27.484-27.213V55.046H72.649c-26.906,0-48.796,21.692-48.796,48.354v360.246   c0,26.661,21.89,48.354,48.796,48.354h366.628c26.947,0,48.87-21.692,48.87-48.354V103.4   C488.147,76.739,466.224,55.046,439.277,55.046z M453.167,462.707c0,8.56-5.751,14.309-14.311,14.309H73.144   c-8.56,0-14.311-5.749-14.311-14.309V178.089h394.334V462.707z"/>
                                <path className="st0"
                                      d="M141.525,102.507h53.392c4.521,0,8.199-3.653,8.199-8.144v-73.87c0-11.3-9.27-20.493-20.666-20.493h-28.459   c-11.395,0-20.668,9.192-20.668,20.493v73.87C133.324,98.854,137.002,102.507,141.525,102.507z"/>
                                <path className="st0"
                                      d="M316.693,102.507h54.025c4.348,0,7.884-3.513,7.884-7.826V20.178C378.602,9.053,369.474,0,358.251,0H329.16   c-11.221,0-20.349,9.053-20.349,20.178v74.503C308.81,98.994,312.347,102.507,316.693,102.507z"/>
                            </svg>
                            <p>Assurer un suivi personnalisé tout au long de nos interventions</p>
                        </li>
                    </ul>
                    <div className="about-us-text-block">
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
