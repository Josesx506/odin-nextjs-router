/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        reactCompiler: true,
    },
    images: {
      path: "/public",
      domains: ['dummyjson.com',"picsum.photos","robohash.org"],
    }
};

export default nextConfig;
