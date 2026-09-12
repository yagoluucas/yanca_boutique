# CMS — Yanca Boutique

CMS simples para editar o conteúdo da home da Yanca Boutique sem alterar código manualmente.

## Arquitetura do MVP

- o painel roda como uma aplicação Astro server-side;
- login de um único administrador via variáveis de ambiente;
- o conteúdo é lido de `apps/web/src/content/data/home.json`;
- ao publicar, o CMS atualiza esse JSON usando a API do GitHub;
- imagens enviadas pelo painel são gravadas em `apps/web/public/uploads`;
- cada publicação vira um commit, mantendo histórico e rollback pelo GitHub;
- o frontend Astro continua estático e lê o JSON durante o build.

## Configuração

```sh
cp .env.example .env
npm install
npm run dev
```

Configure um fine-grained GitHub Personal Access Token com acesso apenas ao repositório `yagoluucas/yanca_boutique` e permissão de `Contents: Read and write`.

As variáveis `CMS_ADMIN_EMAIL`, `CMS_ADMIN_PASSWORD` e `CMS_SESSION_SECRET` nunca devem ser expostas no frontend nem commitadas no repositório.

## Fluxo de publicação

1. A administradora entra no CMS.
2. O painel carrega a versão atual do JSON no branch configurado.
3. Ela altera textos, imagens, links, ordem e posições.
4. `Publicar alterações` valida o conteúdo e cria um commit no GitHub.
5. Se a hospedagem do site estiver integrada ao repositório, esse commit dispara um novo build/deploy do `apps/web`.

## Limitações intencionais desta primeira versão

- autenticação de usuário único; sem perfis/permissões;
- upload limitado a JPG, PNG, WebP e AVIF de até 5 MB;
- não há preview visual em tempo real dentro do CMS ainda;
- não há agendamento, rascunhos ou histórico visual no painel; o histórico existe no Git.
