import React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import * as styles from '../../styles/blog-page.module.css';

export function Head() {
    return (
        <>
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
            <section className="blogs-container">
                <div className={`hero-section-padding ${styles.blogsMain}`}>
                    <div className={styles.blogsText}>
                        <h1>Blog</h1>
                        <p></p>
                    </div>
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