export const cmsConfig = {
  adminEmail: import.meta.env.CMS_ADMIN_EMAIL ?? '',
  adminPassword: import.meta.env.CMS_ADMIN_PASSWORD ?? '',
  sessionSecret: import.meta.env.CMS_SESSION_SECRET ?? '',
  githubToken: import.meta.env.GITHUB_TOKEN ?? '',
  githubRepository: import.meta.env.GITHUB_REPOSITORY ?? 'yagoluucas/yanca_boutique',
  githubBranch: import.meta.env.GITHUB_BRANCH ?? 'main',
  githubContentPath:
    import.meta.env.GITHUB_CONTENT_PATH ?? 'apps/web/src/content/data/home.json',
  githubMediaDirectory:
    import.meta.env.GITHUB_MEDIA_DIRECTORY ?? 'apps/web/public/uploads',
  publicSiteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:4321',
};

export function assertCmsConfig(...keys: (keyof typeof cmsConfig)[]) {
  const missing = keys.filter((key) => !cmsConfig[key]);
  if (missing.length) {
    throw new Error(`Configuração ausente: ${missing.join(', ')}`);
  }
}
