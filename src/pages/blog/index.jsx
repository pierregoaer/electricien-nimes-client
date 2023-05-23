import React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import * as styles from '../../styles/blog-page.module.css';

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

export default function Blogs({data}) {
    const blogs = data.allBlogArticle.nodes
    const blogCardElements = blogs.map(blog => <BlogCard key={blog.id} blogData={blog}/>)
    return (
        <Layout>
            <section className="blog-page-hero">
                <div className="section-inner hero-section-padding">
                    <div className="blog-page-text-block">
                        <h1>Blog</h1>
                        <p>Que vous soyez un propriétaire résidentiel, un professionnel ou un entrepreneur en
                            électricité, vous retrouverez sur cette page tous nos conseils pertinents pour vous
                            accompagner dans vos projets électriques.</p>

                        <p>Ici, vous découvrirez nos articles sur divers sujets, tels que l'installation électrique, la
                            rénovation, la sécurité, l'éclairage, la domotique et bien d'autres sujets d’actualité. Si
                            vous avez des questions ou des sujets spécifiques que vous aimeriez voir abordés, n'hésitez
                            pas à nous contacter. Notre équipe d'experts en électricité se fera un plaisir de vous aider
                            et d’écrire à ce sujet !</p>

                        <p>Ensemble, nous construisons un avenir électrique sûr et performant !</p>
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
        allBlogArticle(sort: {originalId: DESC}) {
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