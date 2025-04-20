import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // trailingSlash: true,
  images: {
    domains: ['image.tmdb.org'],
  },
};

const withNextIntl = createNextIntlPlugin( './src/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
