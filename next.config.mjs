/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_APPWRITE_ENDPOINT: "https://cloud.appwrite.io/v1",
        NEXT_PUBLIC_APPWRITE_PROJECT_ID: "66dd776e0005f73e9156",
        NEXT_PUBLIC_APPWRITE_DATABASE_ID: "66dd7a7600327e5e8ad6"
    }
};

export default nextConfig;
