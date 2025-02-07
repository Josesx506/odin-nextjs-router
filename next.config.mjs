/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: true,
    },
    images: {
      domains: ['dummyjson.com',"picsum.photos","robohash.org"],
    }
};

export default nextConfig;
