🍕 Sistema de Pizzaria – Projeto P1 (TypeScript + Node.js)



Sistema de gerenciamento completo de pizzaria em CLI, com cadastro de clientes, produtos, pedidos, geração de comprovantes .txt e relatórios.

🎯 Objetivo do Projeto

Praticar CRUD em TypeScript

Manipular arquivos JSON para persistência

Gerar comprovantes de pedidos

Criar relatórios de vendas

Estruturar projeto modular e comentado para aprendizado


📌 Funcionalidades

Funcionalidade	Descrição

Cadastro de Clientes	Nome, telefone, ID único

Cadastro de Produtos	Nome, preço, categoria

Registro de Pedidos	Cliente + produtos, total calculado

Geração de Comprovantes	Arquivo .txt em comprovantes/

Relatórios de Vendas	Por dia e por mês

Extras	Histórico de compras, modularidade para expansão


🛠 Tecnologias Utilizadas

Node.js – execução em terminal

TypeScript – tipagem segura e modularidade

fs (File System) – leitura/escrita de arquivos JSON

readline-sync – interação via terminal

JSON – armazenamento de dados


📂 Estrutura de Pastas

pizzaria-ts/

├── src/

│   ├── controllers/  # CRUD e relatórios

│   ├── data/         # arquivos JSON

│   ├── models/       # interfaces Cliente, Produto, Pedido

│   ├── utils/        # funções de leitura/escrita, geração de comprovantes

│   └── index.ts      # arquivo principal CLI

├── comprovantes/     # arquivos .txt de pedidos

├── node_modules/

├── package.json

├── tsconfig.json

└── README.md


🚀 Como Rodar

1. Instalar dependências
npm install

2. Rodar o projeto
npm run dev

3. Navegar pelo menu CLI

Opção 1: Cadastrar cliente

Opção 2: Listar clientes

Opção 3: Cadastrar produto

Opção 4: Listar produtos

Opção 5: Fazer pedido (gera comprovante .txt)

Opção 6: Listar pedidos

Opção 7: Relatório por dia

Opção 8: Relatório por mês

Opção 0: Sair


📄 Exemplo de Comprovante

===== COMPROVANTE DE COMPRA =====

Pedido ID: 1727283546198

Cliente: João Silva - Tel: 99999-9999

Data: 2025-09-25T17:45:32.123Z

Itens:

 - Pizza Margherita (R$ 29.90)
   
 - Refrigerante Lata (R$ 5.00)
   
Total: R$ 34.90

===============================


💡 Dicas de Uso

Verifique se src/data/*.json existe (clientes.json, produtos.json, pedidos.json) com conteúdo [] vazio.

Comprovantes são salvos automaticamente em comprovantes/ com nome pedido_<ID>.txt.

IDs de clientes, produtos e pedidos são UUIDs únicos.

Sistema modular: fácil de expandir para interface web, promoções, formas de pagamento etc.


📄 Licença

MIT License – veja arquivo LICENSE para detalhes.


📌 Autor


Christian Simões – Projeto P1 – Ciência da Computação / Programação TypeScript



