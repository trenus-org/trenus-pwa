/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === "production";
const withBundlerAnalizer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});


const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  pwa: {
    disable: !isProd,
    dest: "public",
  },
}

module.exports = withBundlerAnalizer(withPWA(nextConfig));
