# 🍕 Sistema de Pizzaria (TypeScript + Node.js)

Aplicativo CLI (linha de comando) para gerenciar Clientes, Produtos, Pedidos e Comprovantes de Compra de uma pizzaria. Os dados são persistidos em arquivos JSON, e cada pedido gera um TXT de comprovante. Ideal para aulas de lógica de programação e aprendizado de TypeScript.

## ✨ Recursos

Clientes: cadastro, listagem, atualização e remoção.

Produtos: cadastro, listagem, categorias (pizza, refri, sobremesa).

Pedidos: registro de pedidos, cálculo de total e histórico.

Comprovantes: gerados automaticamente em `comprovantes/`, incluindo ID, cliente, itens, total e data.

Relatórios de Vendas: quantidade de pizzas vendidas por dia e por mês.

Criação automática de pastas e arquivos JSON na primeira execução.

## 📁 Estrutura de Pastas

```
pizzaria-ts/
├─ src/
│   ├─ controllers/       # Lógica de CRUD e relatórios
│   ├─ models/            # Tipos e interfaces (Cliente, Produto, Pedido)
│   ├─ utils/             # Funções auxiliares e geração de comprovantes
│   ├─ data/              # Arquivos JSON de persistência
│   └─ index.ts           # Arquivo principal (CLI)
├─ comprovantes/          # Comprovantes .txt gerados automaticamente
├─ node_modules/          # Dependências
├─ package.json
├─ tsconfig.json
└─ README.md
```

Arquivos JSON

`data/clientes.json` → lista de clientes (id, nome, telefone)

`data/produtos.json` → lista de produtos (id, nome, preço, categoria)

`data/pedidos.json` → lista de pedidos (id, clienteId, produtos, total, data)

Comprovantes TXT

`comprovantes/pedido_<ID>.txt` → detalha o pedido e total, ex.:

```
===== COMPROVANTE DE COMPRA =====
Pedido ID: 1727283546198
Cliente: João Silva - Tel: 99999-9999
Data: 2025-09-25T17:45:32.123Z
Itens:
 - Pizza Margherita (R$ 29.90)
 - Refrigerante Lata (R$ 5.00)
Total: R$ 34.90
===============================
```

## 🔧 Pré-requisitos

* **Node.js 16+ (recomendado 18 ou 20)**

* **npm**

## 🚀 Instalação

Na raiz do projeto (onde está o package.json):

* `npm install`


Crie (ou confira) os scripts no package.json:
```
{
  "scripts": {
    "dev": "ts-node src/index.ts"
  }
}
```

tsconfig.json mínimo recomendado:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

No VS Code, se aparecerem erros de tipos do Node, use Ctrl+Shift+P → TypeScript: Restart TS Server.

## ▶️ Como Executar

Modo desenvolvimento (executa direto o TypeScript):

* `npm run dev`

## 🖥️ Uso (menu de console)

Cadastrar cliente → informe nome e telefone.

Listar clientes → exibe todos os clientes cadastrados.

Cadastrar produto → informe nome, preço e categoria.

Listar produtos → exibe todos os produtos cadastrados.

Fazer pedido → informe ID do cliente e IDs dos produtos. O pedido será registrado e gerará automaticamente o comprovante em TXT.

Listar pedidos → exibe todos os pedidos cadastrados.

Relatório por dia → quantidade de pizzas vendidas em um dia específico.

Relatório por mês → quantidade de pizzas vendidas em um mês específico.

## 🧹 Limpeza / Reset

Para reiniciar os dados, apague os arquivos JSON dentro de data/:

* `rm -f data/*.json`


(No Windows, apague manualmente os arquivos ou use del no PowerShell.)

Os comprovantes permanecem em comprovantes/.

## 💡 Observações

IDs de clientes, produtos e pedidos são UUIDs, garantindo unicidade.

Sistema modular e comentado para fácil expansão.

Pode ser facilmente adaptado para interface web ou banco de dados real.

Ideal para apresentação acadêmica ou estudo de TypeScript e CRUD.

## 📌 Autor

* Christian Dower Simões | RA: 2501871 | CCO 1/2B

