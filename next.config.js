const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/webapp",
  env: {
    googleAPIKey: process.env.GOOGLE_API_KEY
  }
};
