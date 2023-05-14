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
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://electricien-nimes.com',
                sitemap: 'https://electricien-nimes.com/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: `/sitemap.xml`,
            },
        },
    ],
}
