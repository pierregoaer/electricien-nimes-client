import React, {useState} from 'react';
import * as styles from '../styles/contact.module.css'
import Layout from "../components/Layout";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeframe: '',
        budget: '',
        message: '',
    });

    function handleChange(event) {
        const target = event.target;
        const {name, value} = target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }
    console.log(formData)


    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.service || !formData.timeframe || !formData.budget || !formData.message) {
            window.alert("Certains champs requis sont vides.")
            return
        }
        const dataJSON = JSON.stringify(formData);

        fetch('https://api.electricien-nimes.com/contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJSON,
        }).then(response => console.log(response.status));
    }

    return (
        <Layout>
            <section className={styles.contactContainer}>
                <div className={`section-inner ${styles.contactMain} hero-section-padding`}>
                    <div className={styles.contactText}>
                        <div className={styles.contactTextSection}>
                            <h3>Demandez un devis personnalisé</h3>
                            <p className="justified-text">Vous envisagez un projet électrique à Nîmes ? Que ce soit pour
                                une installation, une
                                rénovation, un dépannage ou un conseil en éclairage ou domotique, notre équipe
                                d'électriciens qualifiés est à votre service. Pour obtenir un devis personnalisé et
                                adapté à vos besoins, veuillez remplir le formulaire ci-dessous en détaillant votre
                                projet. Nous vous répondrons dans les plus brefs délais avec une proposition adaptée à
                                vos attentes.</p>
                        </div>
                        <div className={styles.contactTextSection}>
                            <h3>Posez vos questions à notre équipe</h3>
                            <p className="justified-text">Vous avez des questions concernant nos services d'électricité
                                à Nîmes ou vous souhaitez
                                en savoir plus sur nos compétences et notre engagement envers la qualité et la sécurité
                                ? Notre équipe se tient à votre disposition pour répondre à toutes vos interrogations.
                                N'hésitez pas à nous contacter via le formulaire de contact ci-dessous. Nous nous ferons
                                un plaisir de vous renseigner et de vous apporter les informations nécessaires.</p>
                        </div>
                        <div className={styles.contactTextSection}>
                            <h3>Demandez un dépannage électrique</h3>
                            <p className="justified-text">En cas de panne électrique ou d'urgence, notre équipe
                                d'électriciens à Nîmes est prête à
                                intervenir rapidement pour diagnostiquer et réparer les problèmes électriques. Si vous
                                avez besoin d'un dépannage, veuillez nous contacter en précisant la nature de l'urgence
                                et vos coordonnées. Nous nous engageons à intervenir dans les meilleurs délais pour
                                assurer votre sécurité et votre confort.</p>
                        </div>
                    </div>
                    <form>
                        <h1>Contact</h1>
                        <div className={styles.contactFormField}>
                            <label htmlFor="name">Nom*</label>
                            <input
                                type="text"
                                placeholder="Nom complet"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="email">Email*</label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="phone">Téléphone</label>
                            <input
                                type="text"
                                placeholder="Téléphone"
                                name="phone"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="service">Quel type de service recherchez-vous ?*</label>
                            <select name="service" onChange={handleChange}>
                                <option value="" selected disabled>Veuillez choisir une option</option>
                                <option value="Installation">Installation</option>
                                <option value="Rénovation et mise aux normes">Rénovation et mise aux normes</option>
                                <option value="Rénovation et mise aux normes">Dépannage et maintenance</option>
                                <option value="Eclairage">Eclairage</option>
                                <option value="Domotique et objets connectés">Domotique et objets connectés</option>
                                <option value="Autre">Autre (préciser ci-dessous)</option>
                            </select>
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="timeframe">Quel est votre délais souhaité ?*</label>
                            <select name="timeframe" onChange={handleChange}>
                                <option value="" selected disabled>Veuillez choisir une option</option>
                                <option value="Moins de 3 mois">Moins de 3 mois</option>
                                <option value="De 3 à 6 mois">De 3 à 6 mois</option>
                                <option value="Plus de 6 mois">Plus de 6 mois</option>
                            </select>
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="budget">Quel est votre budget ?*</label>
                            <select name="budget" onChange={handleChange}>
                                <option value="" selected disabled>Veuillez choisir une option</option>
                                <option value="Moins de 2500€">Moins de 2500€</option>
                                <option value="Entre 2500€ et 5000€">Entre 2500€ et 5000€</option>
                                <option value="Supérieur à 5000€">Supérieur à 5000€</option>
                            </select>
                        </div>
                        <div className={styles.contactFormField}>
                            <label htmlFor="message">Votre message*</label>
                            <textarea
                                placeholder="Comment peut-on vous aider ?"
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                        </div>
                        <p className={styles.contactFormDisclaimer}>Les champs marqués d'un * sont requis.</p>
                        <button type="submit" className="btn-primary" onClick={handleSubmit}>Envoyer</button>
                    </form>

                </div>
            </section>
        </Layout>
    );
}
