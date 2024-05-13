/** @type {import('next').NextConfig} */
import fs from 'fs';

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devServer = {
        https: {
            key: fs.readFileSync('./certificates/localhost.key'),
            cert: fs.readFileSync('./certificates/localhost.crt'),
        },
      };
    }
    return config;
  },
};

export default nextConfig;
