# Celebre

Projeto web com React, React Router e CSS Modules.

## Stack

- React
- React Router
- CSS Modules
- Vite
- NPM

## Como rodar

```bash
npm install
npm run dev
```

Se o `npm install` falhar por uso de cache restrito (ex.: `only-if-cached`), tente `npm install --prefer-online` ou ajuste a configuração do npm.

## Estrutura de pastas

- **`src/pages/`** — páginas organizadas por feature (ex.: `home/`).
- **`src/pages/<page>/controllers/`** — hooks (controllers) que orquestram lógica e dados para as views.
- **`src/pages/<page>/views/`** — páginas (telas) da aplicação.
- **`src/components/`** — componentes reutilizáveis.
- **`src/styles/`** — estilos globais (`global.css`) e tokens (CSS variables).
- **`src/assets/`** — imagens, ícones e outros arquivos estáticos.
