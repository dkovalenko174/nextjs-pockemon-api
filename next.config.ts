import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
	basePath: process.env.NODE_ENV === 'production' ? '/nextjs-pockemon-api' : '',
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
}

export default nextConfig
