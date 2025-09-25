"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = listarProdutos;
exports.adicionarProduto = adicionarProduto;
const FileHandler_1 = require("../utils/FileHandler");
const PATH = "data/produtos.json";
function listarProdutos() {
    return (0, FileHandler_1.readJSON)(PATH);
}
function adicionarProduto(nome, preco, categoria) {
    const produtos = listarProdutos();
    const novo = { id: Date.now(), nome, preco, categoria };
    produtos.push(novo);
    (0, FileHandler_1.writeJSON)(PATH, produtos);
}
