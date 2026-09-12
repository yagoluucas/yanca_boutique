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

## Conteúdo e CMS

A home obtém todo o conteúdo por `src/content/getHomeContent.ts`. O arquivo usado como fonte é `src/content/data/home.json`, que será publicado pelo CMS em `apps/cms`.

Isso mantém os componentes visuais desacoplados da origem do conteúdo. O CMS pode alterar textos, links, imagens, ordem de itens, enquadramento (`focusPosition`) e posição dos hotspots sem alterar os componentes Astro.

Como o frontend usa `output: 'static'`, uma publicação do CMS precisa gerar um novo build/deploy. Quando o deploy estiver conectado ao GitHub, o commit criado pelo CMS já pode disparar esse fluxo automaticamente.

## Posicionamento das imagens e marcadores da vitrine

O recorte das imagens é controlado por `focusPosition`, em porcentagem:

```json
{
  "focusPosition": { "x": 50, "y": 35 }
}
```

Os marcadores `+` também usam coordenadas percentuais:

```json
{
  "position": { "x": 62, "y": 38 }
}
```

Ao trocar uma fotografia, ajuste o foco e, quando aplicável, os hotspots para manter o enquadramento alinhado à nova imagem.
