/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                hostname: 'cdn.dummyjson.com'
            },
            {
                hostname: 'i.imgur.com'
            }
        ]
    }
};

export default nextConfig;
