module.exports = {
    siteUrl: 'https://trimatech.dev',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
        additionalSitemaps: [],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/*', '/_next/*']
            }
        ]
    },
    exclude: ['/api/*', '/server-sitemap.xml'],
    generateIndexSitemap: true,
    outDir: 'public'
};
