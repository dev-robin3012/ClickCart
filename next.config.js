// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: process.env.NODE_ENV !== "production",
//   runtimeCaching,
// });

module.exports = {
  images: {
    remotePatterns: [{ hostname: "*" }],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};
