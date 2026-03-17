# Teste Vaga FrontEnd - Econverse

Este é o projeto desenvolvido como teste para a vaga de FrontEnd na Econverse, construído em React com Vite e TypeScript, compilando os SCSS com CSS Modules conforme as instruções.

## Tecnologias Usadas

* React 18
* TypeScript
* Vite (Bundler super veloz!)
* SCSS & CSS Modules (para organização dos estilos modulares)
* Zod (validação de schemas e parser de payload)
* Axios / React Query (para gerenciar cache e fetch com perfeição)

## Como executar

### Pré-requisitos
* Node.js v16+ instalado.
* `npm`, `yarn` ou `pnpm` instalado.

### 1. Instalar as dependências

Se usar o PNPM (recomendado como foi feito aqui):
```bash
pnpm install
```
Se usar o NPM:
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento

```bash
pnpm run dev
# ou npm run dev
```

E acesse em `http://localhost:5173`.

### 3. Fazer o build para produção

```bash
pnpm run build
# ou npm run build
```

Isso irá exportar o projeto para a pasta `/dist`.

### Detalhes técnicos importantes do projeto

* **Responsividade e Fidelidade:** O layout das categorias, footer, circles das marcas e modais foram baseados na imagem fornecida do Figma pixel-a-pixel. 
* **Conversão do Payload:** Como o JSON provido (de `app.econverse.com.br`) não retornava as propriedades como a nossa UI esperava (retorna `productName` em vez de `nome`, `photo` em vez de `image`), adicionei no interceptador do repositório/service um pre-parsing inteligente da payload do JSON, usando Zod para validar antes do uso no App. 
* **Semântica HTML5:** Utilização de Tags `<section>`, `<main>`, `<article>`, `<header>`, `<footer>`, `<nav>` etc para priorizar a leitura de código e o SEO da página.
* **Acessibilidade:** Botões, Modais, Imagens tem em sua totalidade `aria-label`, ou focus lock em botões de saída (fechamento de modais), assim a navegação em leitores fica consistente.
