/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: "raw-loader"
            }
        );

        return config;
    }
};

module.exports = nextConfig;
