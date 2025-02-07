/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        reactCompiler: true,
    },
    images: {
      path: "/",
      domains: ['dummyjson.com',"picsum.photos","robohash.org"],
    }
};

export default nextConfig;
