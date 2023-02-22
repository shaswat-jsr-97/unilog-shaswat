/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/overview',
                permanent: true,
            },
        ]
    },
    ...nextConfig,
}
