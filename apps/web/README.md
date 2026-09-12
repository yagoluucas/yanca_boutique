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

## Posicionamento das imagens e marcadores da vitrine

As imagens dos cards de produto usam um container padronizado. O recorte da foto pode ser ajustado individualmente com `focusPosition`, em porcentagem:

```ts
image: {
  src: '/images/look-01.jpeg',
  alt: 'Descrição da imagem',
  width: 1080,
  height: 1350,
  focusPosition: { x: 50, y: 35 },
}
```

Os marcadores `+` também são configurados por foto. Cada detalhe deve informar sua própria posição dentro da imagem renderizada:

```ts
details: [
  {
    id: 'blusa',
    name: 'Blusa',
    position: { x: 62, y: 38 },
  },
  {
    id: 'calca',
    name: 'Calça',
    position: { x: 58, y: 72 },
  },
]
```

Ao trocar a fotografia, ajuste `focusPosition` e os valores `x/y` dos detalhes para manter o enquadramento e os hotspots alinhados com as peças da nova imagem.
