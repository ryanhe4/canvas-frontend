/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      canvas: 'commonjs canvas'
    }) // required to make Konva & react-konva work
    return config;
  },
}

module.exports = nextConfig
