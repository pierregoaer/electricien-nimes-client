module.exports = {
    siteMetadata: {
        siteUrl: `https://electricien-nimes.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: 'src/assets/logo_favicon.png',
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://electricien-nimes.com',
                sitemap: 'https://electricien-nimes.com/sitemap-0.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
                {
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
                `,
                resolvePages: ({
                                   allFile: {nodes: allPages},
                                   allBlogArticle: {nodes: allArticles}}) => {
                    const pages = allPages.map(page => {
                        return {
                            path: `https://electricien-nimes.com/${page.relativePath.replace('index.jsx', '').replace('.jsx', '/')}`,
                            lastmod: page.modifiedTime
                        }
                    })
                    const blogs = allArticles.map(blog => {
                        return {
                            path: `https://electricien-nimes.com/blog/${blog.url}/`,
                            lastmod: new Date(blog.updated_at).toISOString()
                        }
                    })
                    return pages.concat(blogs)
                },
                serialize: ({path, lastmod}) => {
                    return {
                        url: path,
                        lastmod: lastmod
                    }
                },
                createLinkInHead: true,
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-H628T5N3LJ',
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
}
