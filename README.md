<img width="1889" height="942" alt="image" src="https://github.com/user-attachments/assets/7baed9ee-4e33-49ef-811e-516d1810489d" />
<img width="1883" height="914" alt="image" src="https://github.com/user-attachments/assets/ebc1ce3b-af8c-434e-810a-0e08a7c53f68" />
<img width="1895" height="862" alt="image" src="https://github.com/user-attachments/assets/734206b5-7b91-4354-84fa-7f738bcfd7f4" />

---


# Minimalist Photography Portfolio

Este projeto consiste em um portfólio de fotografia minimalista desenvolvido com React, TypeScript e Framer Motion. O objetivo principal é a exibição de trabalhos artísticos com foco em tipografia, layouts assimétricos e elementos visuais de fundo que utilizam efeitos de scroll.

## Requisitos Prévios

Antes de iniciar o projeto, certifique-se de ter instalado em sua máquina:

* **Node.js** (Versão 18.0.0 ou superior)
* **npm** ou **yarn** (Gerenciadores de pacotes)

## Tecnologias e Dependências Principais

* **Vite**: Build tool e servidor de desenvolvimento.
* **React 18**: Biblioteca base para a interface.
* **TypeScript**: Tipagem estática para maior segurança do código.
* **Framer Motion**: Biblioteca de animações para os efeitos de parallax e interações de hover.
* **React Router Dom**: Gerenciamento de rotas e navegação.
* **CSS Modules**: Escopo isolado de estilos por componente.

## Instalação e Execução

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

1. Instalar as dependências do projeto:

```bash
npm install

```

2. Iniciar o servidor de desenvolvimento:

```bash
npm run dev

```

3. Gerar a build para produção:

```bash
npm run build

```

## Estrutura de Pastas Relevante

* `/src/components`: Contém os componentes Hero e elementos de navegação.
* `/src/pages`: Contém o componente Home com a lógica de layout desconstruído.
* `/public/images/formas`: Local das imagens PNG utilizadas para os fundos geométricos (circulos.png, quadrados.png, linhas.png).
* `/public/images/portfolio`: Diretórios de imagens para exibição nas galerias e seções de escada.

## Funcionalidades Técnicas

* **Staircase Grid**: Layout de imagens com deslocamento vertical progressivo via CSS Flexbox.
* **Parallax Background**: Implementação de `useTransform` e `useScroll` do Framer Motion para movimentação de formas geométricas em diferentes velocidades.
* **Image Filtering**: Aplicação de filtros `grayscale` e `contrast` via CSS para padronização visual de imagens externas (Unsplash).
* **Posicionamento Absoluto**: Elementos decorativos posicionados fora do fluxo do documento para cruzar múltiplas seções sem afetar o layout principal.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter o texto na íntegra.

---

3. Salve na pasta raiz (onde está o `package.json`).

