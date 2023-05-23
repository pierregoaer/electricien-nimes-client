import React from 'react';

import Layout from "../components/Layout";
import {graphql} from "gatsby";
import * as styles from '../styles/blog-article.module.css';

export function Head({data}) {
    const curBlog = data.blogArticle
    return (
        <>
            <html lang="fr" />
            <title>{curBlog.meta_title}</title>
            <meta name="description" content={curBlog.meta_description}/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content={`https://electricien-nimes/blog/${curBlog.url}`}/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={curBlog.meta_title}/>
            <meta property="og:description" content={curBlog.meta_description}/>
            <meta property="og:image" content={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_500,w_800,f_auto/v1682719065/website-lending/electricien-nimes/images/${curBlog.hero_image_url}`}/>
        </>
    )
}

export default function Blogs({data}) {
    const curBlog = data.blogArticle
    const articleHTML = <div dangerouslySetInnerHTML={{__html: curBlog.article}}/>

    return (
        <Layout>
            <article>
                <div className="section-inner">
                    <div className={styles.blogArticleHeader}>
                        <h1>{curBlog.title}</h1>
                        <p className={styles.articleDate}>{`${curBlog.date} - ${curBlog.reading_time} minutes de lecture`}</p>
                        <img
                            src={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_500,w_800,f_auto/v1682719065/website-lending/electricien-nimes/images/${curBlog.hero_image_url}`}
                            alt={curBlog.title}/>
                    </div>
                    <div className={styles.blogArticleBody}>
                        {articleHTML}
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery($url: String) {
      blogArticle(url: {eq: $url}) {
        article
        date
        hero_image_url
        id
        meta_description
        meta_title
        reading_time
        title
        url
      }
    }
`