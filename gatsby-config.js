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
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                }
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
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
