/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sm.ign.com' },
      { protocol: 'https', hostname: 'uauposters.com.br' },
      { protocol: 'https', hostname: 'es.web.img3.acsta.net' },
      { protocol: 'https', hostname: 'preview.redd.it' },
    ],
  },
};

export default nextConfig;
