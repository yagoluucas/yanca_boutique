# Yanca Boutique — frontend

Landing page institucional e catálogo estático construído com Astro e TypeScript.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Validação

```sh
npm run check
npm run build
```

O conteúdo da home é obtido exclusivamente por `src/content/getHomeContent.ts`. Hoje ele retorna dados mockados; futuramente poderá ser adaptado para um CMS headless sem alterar os componentes da página.
