import { createHmac, timingSafeEqual } from 'node:crypto';
import { assertCmsConfig, cmsConfig } from './config';

const COOKIE_NAME = 'yanca_cms_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

function signature(payload: string) {
  return createHmac('sha256', cmsConfig.sessionSecret).update(payload).digest('base64url');
}

export function validateCredentials(email: string, password: string) {
  assertCmsConfig('adminEmail', 'adminPassword', 'sessionSecret');
  return safeEqual(email.trim().toLowerCase(), cmsConfig.adminEmail.trim().toLowerCase())
    && safeEqual(password, cmsConfig.adminPassword);
}

export function createSessionCookie(email: string) {
  assertCmsConfig('sessionSecret');
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = Buffer.from(`${email}|${expiresAt}`).toString('base64url');
  const token = `${payload}.${signature(payload)}`;
  const secure = import.meta.env.PROD ? '; Secure' : '';
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}${secure}`;
}

export function clearSessionCookie() {
  const secure = import.meta.env.PROD ? '; Secure' : '';
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

export function isAuthenticated(request: Request) {
  if (!cmsConfig.sessionSecret) return false;

  const cookieHeader = request.headers.get('cookie') ?? '';
  const cookie = cookieHeader
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`));

  if (!cookie) return false;
  const token = cookie.slice(COOKIE_NAME.length + 1);
  const [payload, receivedSignature] = token.split('.');
  if (!payload || !receivedSignature) return false;
  if (!safeEqual(signature(payload), receivedSignature)) return false;

  try {
    const decoded = Buffer.from(payload, 'base64url').toString('utf8');
    const separator = decoded.lastIndexOf('|');
    if (separator < 0) return false;
    const email = decoded.slice(0, separator);
    const expiresAt = Number(decoded.slice(separator + 1));
    return email.toLowerCase() === cmsConfig.adminEmail.toLowerCase()
      && Number.isFinite(expiresAt)
      && expiresAt > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
