import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "skalsky-dvur-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
