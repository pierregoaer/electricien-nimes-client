module.exports = {
    siteMetadata: {
        siteUrl: 'https://electricien-nimes.com'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/logo_favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://electricien-nimes.com',
                sitemap: 'https://electricien-nimes.com/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-H628T5N3LJ",
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
}
