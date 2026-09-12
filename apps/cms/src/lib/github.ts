import { randomUUID } from 'node:crypto';
import { assertCmsConfig, cmsConfig } from './config';

interface GitHubContentFile {
  sha: string;
  content: string;
  encoding: string;
}

function encodePath(path: string) {
  return path.split('/').map(encodeURIComponent).join('/');
}

async function githubRequest<T>(path: string, init?: RequestInit): Promise<T> {
  assertCmsConfig('githubToken', 'githubRepository', 'githubBranch');

  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${cmsConfig.githubToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub ${response.status}: ${body.slice(0, 500)}`);
  }

  return response.json() as Promise<T>;
}

export async function readHomeContent<T>() {
  assertCmsConfig('githubContentPath');
  const file = await githubRequest<GitHubContentFile>(
    `/repos/${cmsConfig.githubRepository}/contents/${encodePath(cmsConfig.githubContentPath)}?ref=${encodeURIComponent(cmsConfig.githubBranch)}`,
  );

  const raw = Buffer.from(file.content.replace(/\n/g, ''), 'base64').toString('utf8');
  return { content: JSON.parse(raw) as T, sha: file.sha };
}

export async function publishHomeContent(content: unknown, sha: string) {
  const body = JSON.stringify(content, null, 2) + '\n';
  return githubRequest(
    `/repos/${cmsConfig.githubRepository}/contents/${encodePath(cmsConfig.githubContentPath)}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        message: 'content: atualizar home via CMS',
        content: Buffer.from(body).toString('base64'),
        sha,
        branch: cmsConfig.githubBranch,
      }),
    },
  );
}

function sanitizeFileName(name: string) {
  const clean = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return clean || 'imagem';
}

export async function uploadImage(fileName: string, bytes: Uint8Array) {
  assertCmsConfig('githubMediaDirectory');
  const safeName = sanitizeFileName(fileName);
  const uniqueName = `${Date.now()}-${randomUUID().slice(0, 8)}-${safeName}`;
  const repositoryPath = `${cmsConfig.githubMediaDirectory}/${uniqueName}`;

  await githubRequest(
    `/repos/${cmsConfig.githubRepository}/contents/${encodePath(repositoryPath)}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        message: `content: adicionar imagem ${uniqueName}`,
        content: Buffer.from(bytes).toString('base64'),
        branch: cmsConfig.githubBranch,
      }),
    },
  );

  const publicPrefix = 'apps/web/public/';
  const publicPath = repositoryPath.startsWith(publicPrefix)
    ? `/${repositoryPath.slice(publicPrefix.length)}`
    : repositoryPath;

  return { repositoryPath, publicPath };
}
