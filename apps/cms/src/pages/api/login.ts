import type { APIRoute } from 'astro';
import { createSessionCookie, validateCredentials } from '../../lib/auth';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');

    if (!validateCredentials(email, password)) {
      return new Response(null, {
        status: 303,
        headers: { Location: '/login?error=1' },
      });
    }

    return new Response(null, {
      status: 303,
      headers: {
        Location: '/',
        'Set-Cookie': createSessionCookie(email),
      },
    });
  } catch {
    return new Response(null, {
      status: 303,
      headers: { Location: '/login?config=1' },
    });
  }
};
