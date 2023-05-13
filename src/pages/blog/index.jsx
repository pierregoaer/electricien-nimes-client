import React, {useState, useEffect} from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/Layout";
import BlogCard from "../../components/BlogCard";

import * as styles from '../../styles/blog-page.module.css';

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