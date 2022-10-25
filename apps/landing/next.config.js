/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_API_URL: "http://localhost:8080/v1",
	},
};

module.exports = nextConfig;
