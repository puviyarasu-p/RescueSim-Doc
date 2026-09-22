import type { NextConfig } from "next";

// Set by the GitHub Actions workflow to "/<repo-name>" for a project page
// (username.github.io/<repo-name>), or left empty for a user/org page repo
// (username.github.io) or local dev.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // GitHub Pages serves static files only — no image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
