"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const ClienteController_1 = require("./controllers/ClienteController");
const ProdutoController_1 = require("./controllers/ProdutoController");
const PedidoController_1 = require("./controllers/PedidoController");
function main() {
    let opcao = "";
    while (opcao !== "0") {
        console.log("\n=== Sistema Pizzaria ===");
        console.log("1. Cadastrar cliente");
        console.log("2. Listar clientes");
        console.log("3. Cadastrar produto");
        console.log("4. Listar produtos");
        console.log("5. Fazer pedido");
        console.log("6. Listar pedidos");
        console.log("7. Relatório por dia");
        console.log("8. Relatório por mês");
        console.log("0. Sair");
        opcao = rl.question("Escolha: ");
        switch (opcao) {
            case "1":
                const nome = rl.question("Nome: ");
                const tel = rl.question("Telefone: ");
                (0, ClienteController_1.adicionarCliente)(nome, tel);
                break;
            case "2":
                console.log((0, ClienteController_1.listarClientes)());
                break;
            case "3":
                const nomeP = rl.question("Produto: ");
                const preco = parseFloat(rl.question("Preco: "));
                const cat = rl.question("Categoria (pizza/refri/sobremesa): ");
                (0, ProdutoController_1.adicionarProduto)(nomeP, preco, cat);
                break;
            case "4":
                console.log((0, ProdutoController_1.listarProdutos)());
                break;
            case "5":
                const clienteId = parseInt(rl.question("ID do cliente: "));
                const prods = rl.question("IDs dos produtos (separados por virgula): ")
                    .split(",")
                    .map(Number);
                (0, PedidoController_1.adicionarPedido)(clienteId, prods);
                console.log("Pedido realizado! Comprovante gerado em dist/comprovantes");
                break;
            case "6":
                console.log((0, PedidoController_1.listarPedidos)());
                break;
            case "7":
                const dia = rl.question("Dia (YYYY-MM-DD): ");
                console.log((0, PedidoController_1.relatorioPorDia)(dia));
                break;
            case "8":
                const mes = rl.question("Mês (YYYY-MM): ");
                console.log((0, PedidoController_1.relatorioPorMes)(mes));
                break;
        }
    }
}
main();
