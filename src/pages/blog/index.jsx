import React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import * as styles from '../../styles/blog-page.module.css';

export function Head() {
    return (
        <>
            <html lang="fr" />
            <link rel="alternate" href="https://eletricien-nimes.com/blog" hrefLang="fr"/>
            <title>Blog électricité à Nîmes |  Découvrez nos conseils en électricité</title>
            <meta name="description" content="Parcourez tous nos conseils pour vos projets électriques. Faites confiance à nos électriciens."/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com/blog"/>
            <meta property="og:type" content="blog"/>
            <meta property="og:title" content="Blog électricité à Nîmes |  Découvrez nos conseils en électricité"/>
            <meta property="og:description" content="Parcourez tous nos conseils pour vos projets électriques. Faites confiance à nos électriciens."/>
            <meta property="og:image" content="https://res.cloudinary.com/dg8awj55m/image/upload/v1683849342/website-lending/electricien-nimes/meta-images/conseils-electricite.png"/>
        </>
    )
}

export default function Blogs({ data }) {
    const blogs = data.allBlogArticle.nodes
    const blogCardElements = blogs.map(blog => <BlogCard key={blog.id} blogData={blog}/>)
    return (
        <Layout>
            <section className="blog-page-hero">
                <div className="section-inner hero-section-padding">
                    <div className="blog-page-text-block">
                        <h1>Blog</h1>
                        <p>Notre entreprise d'électricité à Nîmes se distingue par son expertise, ses compétences et ses
                            valeurs. Nous sommes fiers de mettre notre savoir-faire au service de nos clients pour leur
                            offrir des prestations de qualité et garantir leur satisfaction. Découvrez nos
                            certifications, nos formations et nos compétences, ainsi que notre engagement envers la
                            qualité et la sécurité dans le domaine de l'électricité.</p>
                    </div>
                </div>
            </section>
            <section className="blogs-container">
                <div className={`hero-section-padding ${styles.blogsMain}`}>
                    <div className={styles.blogsGrid}>
                        {blogCardElements}
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query AllBlogs {
        allBlogArticle {
            nodes {
                url
                title
                reading_time
                hero_image_url
                date
                meta_description
                id
            }
        }
    } 
`