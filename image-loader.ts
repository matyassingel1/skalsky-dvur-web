// GitHub Pages static export — prepend basePath to every image src.
const repo = "skalsky-dvur-web";
const isProd = process.env.NODE_ENV === "production";

export default function imageLoader({ src }: { src: string; width: number }) {
  const base = isProd ? `/${repo}` : "";
  return `${base}${src}`;
}
