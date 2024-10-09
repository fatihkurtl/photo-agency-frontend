/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
