module.exports = {
  // reactStrictMode: true,
  // swcMinify: true,
  // optimizeFonts: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dtrpgszja/**/**",
      },
    ],
  },
};
