import React from 'react';
import Layout from "../components/Layout";
import {graphql} from "gatsby";

export function Head() {
    return (
        <>
            <html lang="fr" />
            <link rel="alternate" href="https://eletricien-nimes.com" hrefLang="fr"/>
            <title>404 - Cette page n'existe pas</title>
            <meta name="description" content="404 - Cette page n'existe pas"/>
            <meta name="robots" content="index, follow"/>
            <meta property="og:url" content="https://eletricien-nimes.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="404 - Cette page n'existe pas"/>
            <meta property="og:description" content="404 - Cette page n'existe pas"/>
            <meta property="og:image" content=""/>
        </>
    )
}

export default function Page404({data}) {
    console.log(data)
    // const pages = data.allFile.nodes.map(page => {
    //     return {
    //         loc: `https://electricien-nimes.com/${page.relativePath.replace('index.jsx', '').replace('.jsx', '/')}`,
    //         lastmod: page.modifiedTime
    //     }
    // })
    // const blogs = data.allBlogArticle.nodes.map(blog => {
    //     return {
    //         loc: `https://electricien-nimes.com/blog/${blog.url}/`,
    //         lastmod: new Date(blog.updated_at).toISOString()
    //     }
    // })
    // console.log(pages.concat(blogs))
    return (
        <Layout>
            <div>
                <h1 style={{fontSize: '2rem' ,textAlign: 'center', margin: '90px auto'}}>Cette page n'existe pas.</h1>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query sitemapData {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allFile(filter: {relativePath: {ne: "404.jsx"}}) {
        nodes {
          modifiedTime
          relativePath
        }
      }
      allBlogArticle {
        nodes {
          updated_at
          url
        }
      }
  }
`
