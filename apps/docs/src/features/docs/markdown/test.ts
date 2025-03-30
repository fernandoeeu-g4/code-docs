export const frontendStackDoc = `
# 🧱 Stack Frontend — Acme Inc

Esta é a stack oficial usada em nossos projetos frontend. Ela foi pensada para ser moderna, escalável e de fácil manutenção.

{% alert title="🛠️ Padrão oficial" %}
Toda nova feature ou projeto deve seguir este setup salvo exceções justificadas.
{% /alert %}

---

## 🧠 Filosofia

> “Organização por feature, flexibilidade por componente.”

- Estrutura baseada em **Atomic Design**
- Pastas separadas por **domínio da aplicação**
- Componentes genéricos e reutilizáveis vivem no \`shared/\` e \`design-system/\`
- Feature-first: cada nova funcionalidade ganha seu próprio namespace

---

## ⚙️ Tecnologias principais

### 🧩 Framework e build
- **[React](https://reactjs.org)** + **[Vite](https://vitejs.dev)** para desenvolvimento rápido e leve
- **[TypeScript](https://www.typescriptlang.org/)** como linguagem padrão

### 🔀 Router
- **[TanStack Router](https://tanstack.com/router)** com rotas em \`src/routes/\`  
  - Usamos convenção de arquivos kebab-case
  - Planos futuros de migrar para **TanStack Start**

### 💅 Estilo e temas
- **[Tailwind CSS](https://tailwindcss.com)** com tema \`light/dark\` via ShadCN
- Tema customizável baseado na identidade visual do projeto (em breve)

### 🧠 Estado
- **[Zustand](https://zustand.dev)** ou **[Jotai](https://jotai.org)** para estados globais
  - Zustand para stores mais complexos
  - Jotai para controle local de UI (modais, sidebar etc)

### 🧪 Validação
- **[Zod](https://zod.dev)** para validações de schemas e formulários

### 🧱 Design System
- **[ShadCN UI](https://ui.shadcn.com)**
- **Radix UI** para acessibilidade e interações de base
- Organização:
  - \`shared/\` → wrappers, motion libs, UI helpers
  - \`design-system/\` → botões, inputs, switches etc

---

## 🧭 Organização de pastas

\`\`\`txt
src/
├─ routes/         # Rotas com TanStack
├─ features/       # Domínios da aplicação (ex: users, settings)
│  ├─ components/  # Componentes específicos da feature
│  ├─ api/         # Hooks de chamada, schemas e endpoints
├─ components/
│  ├─ shared/      # Libs visuais e componentes auxiliares
│  ├─ design-system/ # Botões, inputs, switches etc
├─ atoms/          # Zustand/Jotai state files
├─ pages/          # Entrypoints de páginas (opcional)
\`\`\`

---

## 🚀 CLI

Em breve teremos uma CLI com comandos como:

\`\`\`bash
pnpm gen:feature users
pnpm gen:component Button
\`\`\`

---

## 🧪 Testes e qualidade

- **Vitest** para testes unitários
- **ESLint + Prettier** com padrão interno
- Planejamos adicionar **Storybook** ao design system

---

## ✅ Boas práticas

- Use hooks como \`use-users.ts\` para centralizar chamadas e schemas
- Prefira componentes do \`design-system\` quando aplicável
- Toda nova feature deve conter:
  - \`api/\` com schemas + chamadas
  - \`components/\` da feature
  - Testes ou plano de teste
  - Documentação MDX/Markdoc

---

{% badge variant="outline" %}Última atualização: Março/2025{% /badge %}
`;
