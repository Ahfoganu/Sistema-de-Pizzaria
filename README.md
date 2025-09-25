🍕 Sistema de Pizzaria – Projeto P1 (TypeScript + Node.js)

Bem-vindo ao Sistema de Pizzaria desenvolvido em TypeScript, inspirado no estilo de projetos didáticos como o estacionamento-type
.
Este projeto simula o gerenciamento completo de uma pizzaria em CLI (linha de comando), com cadastro de clientes, produtos, pedidos, geração de comprovantes e relatórios de vendas.

🎯 Objetivo do Projeto

O objetivo deste sistema é proporcionar:

Prática de CRUD (Create, Read, Update, Delete) em TypeScript.

Manipulação de arquivos JSON para persistência de dados.

Geração de comprovantes de compra em .txt.

Criação de relatórios simples de vendas por dia e mês.

Estruturação de um projeto modular e comentado, facilitando aprendizado e manutenção.

Este projeto é perfeito para estudantes de programação ou quem quer entender como construir sistemas simples sem banco de dados complexo.

✨ Funcionalidades Principais
1️⃣ Cadastro de Clientes

Registrar clientes com nome, telefone e futuramente endereço.

Listar, atualizar e remover clientes.

Cada cliente possui um ID único (UUID) gerado automaticamente.

2️⃣ Cadastro de Produtos

Produtos classificados em categorias: pizza, refrigerante, sobremesa.

Cada produto possui ID, nome, preço e categoria.

Permite listar produtos existentes.

3️⃣ Registro de Pedidos

Registrar pedidos de clientes selecionando produtos pelo ID.

Calcula automaticamente o total do pedido.

Permite consultar todos os pedidos registrados.

4️⃣ Geração de Comprovantes em .txt

Cada pedido gera um arquivo .txt na pasta comprovantes/.

O comprovante contém:

ID do pedido

Dados do cliente

Lista de produtos e preços

Total do pedido

Data e hora da compra

Exemplo de comprovante:

===== COMPROVANTE DE COMPRA =====
Pedido ID: 1727283546198
Cliente: João Silva - Tel: 99999-9999
Data: 2025-09-25T17:45:32.123Z
Itens:
 - Pizza Margherita (R$ 29.90)
 - Refrigerante Lata (R$ 5.00)
Total: R$ 34.90
===============================

5️⃣ Relatórios de Vendas

Quantidade de pizzas vendidas por dia.

Quantidade de pizzas vendidas por mês.

Permite analisar rapidamente o desempenho da pizzaria.

6️⃣ Extras

Histórico de compras de cada cliente.

Sistema modular que permite fácil expansão (ex.: promoções, formas de pagamento, integração com interface web futura).

🛠 Tecnologias Utilizadas

Node.js – ambiente de execução JavaScript/TypeScript.

TypeScript – linguagem fortemente tipada para garantir segurança e manutenção.

fs (File System) – manipulação de arquivos para persistência de dados.

readline-sync – entrada de dados via terminal.

JSON – armazenamento estruturado de clientes, produtos e pedidos.

📂 Estrutura de Pastas
pizzaria-ts/
├── src/
│   ├── controllers/       # Lógica de CRUD e relatórios
│   │   ├── ClienteController.ts
│   │   ├── ProdutoController.ts
│   │   └── PedidoController.ts
│   ├── data/              # Arquivos JSON de persistência
│   │   ├── clientes.json
│   │   ├── produtos.json
│   │   └── pedidos.json
│   ├── models/            # Tipos e interfaces (Cliente, Produto, Pedido)
│   │   ├── Cliente.ts
│   │   ├── Produto.ts
│   │   └── Pedido.ts
│   ├── utils/             # Funções auxiliares de leitura/escrita e geração de comprovantes
│   │   └── fileHandler.ts
│   └── index.ts           # Arquivo principal (CLI)
├── comprovantes/          # Recebidos gerados automaticamente em .txt
├── node_modules/          # Dependências do projeto
├── package.json
├── tsconfig.json
└── README.md

🚀 Como Executar

Instalar dependências:

npm install


Rodar em modo desenvolvimento (usando ts-node):

npm run dev


Navegar pelo sistema:

O sistema funciona via menu CLI, permitindo escolher opções numericamente (ex.: cadastrar cliente, listar produtos, fazer pedido).

Todos os dados são salvos automaticamente nos arquivos JSON.

Comprovantes são gerados em comprovantes/.

Exemplo de execução:

Escolha: 1
Nome: João Silva
Telefone: 99999-9999
Cliente adicionado com sucesso!

💡 Dicas de Uso

Antes de rodar, verifique se a pasta data/ existe com os arquivos clientes.json, produtos.json e pedidos.json (mesmo vazios []).

Comprovantes são sempre salvos com nome pedido_<ID>.txt.

IDs de clientes, produtos e pedidos são UUIDs gerados automaticamente, garantindo unicidade.

📝 Observações Finais

Projeto desenvolvido como atividade acadêmica P1.

Pode ser facilmente expandido para interface web, integração com banco real ou funcionalidades adicionais.

Todo o sistema é modular e comentado, facilitando aprendizado em TypeScript.

📌 Autor

Christian Simões – Projeto P1 – Ciência da Computação / Programação TypeScript