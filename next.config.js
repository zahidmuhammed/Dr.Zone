/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: 'imgix',
		path: '',
		// domains: ['avataaars.io'],
	},
};

module.exports = nextConfig;
