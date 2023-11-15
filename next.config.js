const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  assetPrefix: isProd ? "./webapp" : "./",
  env: {
    googleAPIKey: process.env.GOOGLE_API_KEY
  }
};
