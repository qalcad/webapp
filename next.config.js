const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/webapp" : "";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath,
  env: {
    googleAPIKey: process.env.GOOGLE_API_KEY,
    basePath: basePath
  }
};
