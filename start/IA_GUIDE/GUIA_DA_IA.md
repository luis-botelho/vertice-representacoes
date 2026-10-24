# GUIA DA IA - Vértice Representações

Guia extra gerado pela IA que está implementando. Não está no repo público, fica só em start/.

## Contexto
Baseado em: VERTICE_PROMPT_MESTRE_OPENCODE.txt + VERTICE_AI_STARTER/ + instruções deste chat.

## Regras Críticas (resumidas)
- Catálogo B2B, SEM checkout/pagamento
- Não inventar dados (CNPJ, preços, etc)
- Nenhuma conta necessária para cotar
- /admin sem link público, mas auth/autorization server-side OBRIGATÓRIAS
- Persistir lead ANTES de enviar email; falha de email não apaga lead nem finge sucesso
- JSON fora de public/, validado por schema, escrita segura (tmp+rename)
- Sem geolocalização precisa; cidade/UF basta
- Consentimento marketing SEPARADO e opcional (não "aceito tudo")
- Privacidade/políticas = revisão humana
- Next.js App Router + TS strict + SCSS Modules (sem Tailwind)

## Fluxo para esta tarefa
1. Ler AGENTS.md, README.md, docs/ e VERTICE_PROMPT_MESTRE_OPENCODE.txt
2. Criar repo git, ignorar start/ (feito)
3. Estruturar projeto conforme arquitetura
4. Implementar completo (não só plano)
5. Branches/commits estratégicos
6. Testes, lint, typecheck, build
7. Atualizar docs
8. Ao final de cada seção, atualizar este guia com aprendizados/interações

## Aprendizados até agora
- Iniciado repo git (master), start/ adicionado ao .gitignore
- Copiado starter para raiz
- Estrutura de pastas criada


## Seção 1 - Base do projeto (completa)
- Criado package.json com deps (Next, React, TS, SCSS, zod, nodemailer, uuid, bcryptjs, cookie)
- tsconfig.json, next.config.mjs
- .env.example sem secrets
- .gitignore atualizado
- Estrutura de pastas criada

Próxima: criar app/ routes, lib/ (validation, storage, auth, email), components/, features/

## Seção 2 - Schemas e Storage
- Criados schemas Zod (Category, Product, QuoteRequest, QuoteSubmit)
- jsonRepo com escrita segura (tmp + rename), leitura com fallback
- Regras: persistir lead antes de email, validação server-side

Próxima: auth, email adapter, API routes

## Seção 3 - Auth e Email
- Sessão básica com cookie HttpOnly
- Adaptador SMTP nodemailer
- Template HTML/texto com escape, links e sem PII excessiva no assunto

Próxima: API de cotação (persistir antes de email), rotas públicas, admin

## Seção 4 - API Cotação
- POST /api/quotes: valida, persiste lead ANTES de email, tenta enviar, atualiza status
- Falha de email não apaga lead nem confirma sucesso enganoso

Próxima: criar rotas públicas (home, catalogo, cotacao, privacidade) e componentes básicos

## Seção 5 - Páginas públicas básicas
- Home com hero, como funciona, links
- Layout global e estilos SCSS Modules
- Sem Tailwind

Próxima: catálogo, detalhe, cotação, privacidade/termos

## Seção 6 - Páginas públicas completas
- Catálogo, cotação com formulário, privacidade, termos
- Avisos de revisão jurídica
- Sem conta obrigatória para cotar

Próxima: área admin com auth server-side, CRUD, gestão de leads

## Seção 7 - Admin com auth server-side
- /admin/login sem link público
- /admin protegido por getSession() server-side
- API login com bcrypt
- Dashboard básico

Próxima: CRUD produtos/categorias, gestão de leads, atualizar docs

## Seção 8 - Confirmação e finalizações
- Página de confirmação
- Estrutura completa MVP

Próxima: atualizar docs conforme prompts, criar branches estratégicos, rodar verificações

## Seção 9 - Git
- Repo git iniciado, start/ ignorado
- Branches criadas: feature/setup-inicial, feature/catalogo-cotacao, feature/admin, docs/atualizacao
- Commits estratégicos por seção

Próxima: criar repo no GitHub e push (a pasta start fica só no pc, não sobe)
