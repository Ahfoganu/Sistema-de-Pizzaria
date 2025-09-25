"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPedidos = listarPedidos;
exports.adicionarPedido = adicionarPedido;
exports.relatorioPorDia = relatorioPorDia;
exports.relatorioPorMes = relatorioPorMes;
const FileHandler_1 = require("../utils/FileHandler");
const ProdutoController_1 = require("./ProdutoController");
const ClienteController_1 = require("./ClienteController");
const PATH = "data/pedidos.json";
function listarPedidos() {
    return (0, FileHandler_1.readJSON)(PATH);
}
function adicionarPedido(clienteId, produtosIds) {
    const pedidos = listarPedidos();
    const produtos = (0, ProdutoController_1.listarProdutos)();
    const clientes = (0, ClienteController_1.listarClientes)();
    const selecionados = produtos.filter(p => produtosIds.includes(p.id));
    const total = selecionados.reduce((acc, p) => acc + p.preco, 0);
    const cliente = clientes.find(c => c.id === clienteId);
    const novo = {
        id: Date.now(),
        clienteId,
        produtos: produtosIds,
        data: new Date().toISOString(),
        total
    };
    pedidos.push(novo);
    (0, FileHandler_1.writeJSON)(PATH, pedidos);
    // Gerar comprovante TXT
    let recibo = "===== COMPROVANTE DE COMPRA =====\n";
    recibo += `Pedido ID: ${novo.id}\n`;
    recibo += `Cliente: ${cliente?.nome} - Tel: ${cliente?.telefone}\n`;
    recibo += `Data: ${novo.data}\n`;
    recibo += "Itens:\n";
    selecionados.forEach(p => {
        recibo += ` - ${p.nome} (R$ ${p.preco.toFixed(2)})\n`;
    });
    recibo += `Total: R$ ${total.toFixed(2)}\n`;
    recibo += "===============================\n";
    (0, FileHandler_1.saveReceipt)(recibo, `pedido_${novo.id}.txt`);
}
// Relatórios: pizzas por dia e mês
function relatorioPorDia(dia) {
    const pedidos = listarPedidos();
    return pedidos.filter(p => p.data.startsWith(dia));
}
function relatorioPorMes(mes) {
    const pedidos = listarPedidos();
    return pedidos.filter(p => p.data.substring(0, 7) === mes);
}
