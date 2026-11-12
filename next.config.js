const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        // City Builder's docs moved to the docs site; its old page here is gone.
        return [
            {
                source: '/:locale/plugins/city-builder/docs',
                destination: 'https://docs.trimatech.dev/city-builder/',
                permanent: false
            },
            {
                source: '/plugins/city-builder/docs',
                destination: 'https://docs.trimatech.dev/city-builder/',
                permanent: false
            }
        ];
    }
};

module.exports = withNextIntl(nextConfig);
