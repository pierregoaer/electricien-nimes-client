import React from 'react';
import TestimonialCard from "./TestimonialCard.jsx";
import * as styles from '../styles/testimonials.module.css'

export default function Testimonials({testimonials}) {
    const testimonialElements = testimonials.map(testimonial => {
        return (
            <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
            />
        )
    })

    return (
        <section className={styles.testimonialsContainer}>
            <div className={`section-inner secondary-section-padding ${styles.testimonialsMain}`}>
                <div className={styles.testimonialsText}>
                    <h2>Nos clients sont satisfaits</h2>
                    <p>En tant qu'électricien à Nîmes, nous sommes fiers de vous présenter nos réalisations en matière
                        de projets résidentiels. La satisfaction de nos clients est notre priorité. Nous mettons tout en
                        œuvre pour vous offrir un service de qualité, adapté à vos besoins et à vos attentes.</p>
                    <p>N'hésitez pas à nous contacter pour discuter de votre projet résidentiel et obtenir un devis
                        personnalisé. En choisissant notre entreprise d'électriciens à Nîmes, vous bénéficierez d'une
                        expertise reconnue et d'un accompagnement personnalisé tout au long de votre projet. Ensemble,
                        concrétisons vos projets électriques et assurons la sécurité, la performance et le confort de
                        votre habitation !</p>
                </div>
                <ul className={styles.testimonialsList}>
                    {testimonialElements}
                </ul>
            </div>
        </section>
    );
}
