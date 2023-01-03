/** @type {import('next').NextConfig} */

const API_BASE_URL = 'http://localhost:3300/'
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: API_BASE_URL,
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
    EXPIRE_AT: '3600s'
  },
  images: {
    domains: ['file:///C:/Users/baky0/OneDrive/Documents/dioda'],
  }
}