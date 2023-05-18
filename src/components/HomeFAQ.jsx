import React from 'react';
import FAQQuestion from "./FAQQuestion";
import {Link} from "gatsby";
import * as styles from '../styles/home.module.css'


export default function HomeServices() {
    return (
        <section className={styles.homeFaqContainer}>
            <div className={`section-inner secondary-section-padding ${styles.homeFaqMain}`}>
                <div className={styles.homeFaqText}>
                    <h2>Les questions fréquentes sur l'électricité</h2>
                    <p>Vous avez d'autres questions ?</p>
                    <Link to={'/contact'} className="btn-primary">Contactez-Nous</Link>
                </div>
                <ul className={styles.homeFaqList}>
                    <FAQQuestion
                        question="Quelles sont les normes à respecter pour une installation électrique ?"
                        answer="<p>Les installations électriques doivent respecter <a href='https://www.legrand.fr/pro/normes-et-reglementations/norme-nf-c-15-100/norme-nf-c-15-100-suivez-le-guide' target='_blank' >la norme NF C 15-100 <svg viewBox='0 0 24 24'><path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z'></path></svg></Link></a>, qui garantit la sécurité et la performance des équipements électriques. Nos électriciens à Nîmes veillent à respecter cette norme lors de la réalisation de vos projets.</p>"
                    />
                    <FAQQuestion
                        question="Comment savoir si mon installation électrique est aux normes ?"
                        answer="<p>Pour vérifier si votre installation électrique est aux normes, il est recommandé de faire appel à un électricien professionnel à Nîmes. Celui - ci pourra effectuer un diagnostic complet de votre installation et vous conseiller sur les éventuelles améliorations à apporter. Vous pouvez aussi faire appel à un diagnostiqueur immobilier professionnel.</p>"
                    />
                    <FAQQuestion
                        question="Combien coûte un dépannage électrique ?"
                        answer="<p>Le coût d'un dépannage électrique peut varier en fonction de la nature du problème et de la complexité des travaux à réaliser. N'hésitez pas à nous contacter pour obtenir un devis personnalisé pour vos besoins en dépannage électrique à Nîmes.</p>"
                    />
                    <FAQQuestion
                        question="Quelle est la durée de vie d'une installation électrique ?"
                        answer="<p>La durée de vie d'une installation électrique dépend de plusieurs facteurs, tels que la qualité des matériaux utilisés, l'entretien et les conditions d'utilisation. En règle générale, une installation électrique bien entretenue peut durer entre 20 et 40 ans.</p>"
                    />

                </ul>
            </div>
        </section>
    );
}
