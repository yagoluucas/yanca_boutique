import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';
import { publishHomeContent, readHomeContent } from '../../lib/github';
import { validateHomeContent } from '../../lib/validate';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export const GET: APIRoute = async ({ request }) => {
  if (!isAuthenticated(request)) return json({ error: 'Não autorizado.' }, 401);

  try {
    return json(await readHomeContent());
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Erro ao carregar conteúdo.' }, 500);
  }
};

export const PUT: APIRoute = async ({ request }) => {
  if (!isAuthenticated(request)) return json({ error: 'Não autorizado.' }, 401);

  try {
    const body = await request.json() as { content?: unknown; sha?: string };
    const errors = validateHomeContent(body.content);
    if (errors.length) return json({ error: 'Conteúdo inválido.', details: errors }, 400);
    if (!body.sha) return json({ error: 'SHA da versão atual é obrigatório.' }, 400);

    await publishHomeContent(body.content, body.sha);
    const latest = await readHomeContent();
    return json({ ok: true, sha: latest.sha });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Erro ao publicar conteúdo.' }, 500);
  }
};
