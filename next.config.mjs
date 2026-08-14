/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eyxsqcwzjyhfnkngwnbu.supabase.co',
      },
    ],
  },
};

export default nextConfig;