import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    transpilePackages: ['@mui/material', '@mui/icons-material'],
    /* config options here */
    async rewrites() {
        return [
            {
                source: `/api/naver/:path*`,
                destination: 'https://openapi.naver.com/:path*',
            },
        ];
    },
    // experimental: {
    //     turbo: {
    //         rules: {
    //             '*.svg': {
    //                 loaders: ['@svgr/webpack'],
    //                 as: '*.js',
    //             },
    //         },
    //     },
    // },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
};

export default nextConfig;
