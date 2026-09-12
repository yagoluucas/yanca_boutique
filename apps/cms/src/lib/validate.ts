const REQUIRED_TOP_LEVEL_KEYS = [
  'seo',
  'header',
  'hero',
  'featuredProducts',
  'collections',
  'about',
  'howItWorks',
  'closingEditorial',
  'finalCta',
  'footer',
  'whatsapp',
];

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validatePositions(value: unknown, path = 'content', errors: string[] = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validatePositions(item, `${path}[${index}]`, errors));
    return errors;
  }
  if (!isObject(value)) return errors;

  for (const [key, child] of Object.entries(value)) {
    if ((key === 'position' || key === 'focusPosition') && isObject(child)) {
      const x = child.x;
      const y = child.y;
      if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || x > 100 || y < 0 || y > 100) {
        errors.push(`${path}.${key} precisa ter x/y entre 0 e 100.`);
      }
    }
    validatePositions(child, `${path}.${key}`, errors);
  }
  return errors;
}

export function validateHomeContent(value: unknown) {
  const errors: string[] = [];
  if (!isObject(value)) return ['O conteúdo precisa ser um objeto JSON.'];

  for (const key of REQUIRED_TOP_LEVEL_KEYS) {
    if (!(key in value)) errors.push(`Campo obrigatório ausente: ${key}.`);
  }

  const hero = value.hero;
  if (!isObject(hero) || !isObject(hero.image) || typeof hero.image.src !== 'string') {
    errors.push('A imagem principal do hero é obrigatória.');
  }

  validatePositions(value, 'content', errors);
  return errors;
}
