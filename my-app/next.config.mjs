/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        has: [
          {
            type: 'cookie',
            key: 'loggedIn',
            value: 'false',
          },
        ],
        destination: '/auth/login',
        permanent: false,
      },
    ];
  },
};

export default  nextConfig;
