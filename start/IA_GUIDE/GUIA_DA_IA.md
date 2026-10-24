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
