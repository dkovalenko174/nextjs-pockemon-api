import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	basePath: 'nextjs-pockemon-api',
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
}

export default nextConfig
