import type { APIRoute } from 'astro';
import { isAuthenticated } from '../../lib/auth';
import { uploadImage } from '../../lib/github';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif']);

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!isAuthenticated(request)) return json({ error: 'Não autorizado.' }, 401);

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!(file instanceof File)) return json({ error: 'Arquivo de imagem obrigatório.' }, 400);
    if (!ALLOWED_TYPES.has(file.type)) return json({ error: 'Formato não permitido. Use JPG, PNG, WebP ou AVIF.' }, 400);
    if (file.size > MAX_FILE_SIZE) return json({ error: 'Imagem maior que 5 MB.' }, 400);

    const bytes = new Uint8Array(await file.arrayBuffer());
    return json(await uploadImage(file.name, bytes));
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : 'Erro ao enviar imagem.' }, 500);
  }
};
