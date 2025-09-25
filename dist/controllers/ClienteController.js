"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarClientes = listarClientes;
exports.adicionarCliente = adicionarCliente;
exports.atualizarCliente = atualizarCliente;
exports.removerCliente = removerCliente;
const FileHandler_1 = require("../utils/FileHandler");
const PATH = "data/clientes.json";
function listarClientes() {
    return (0, FileHandler_1.readJSON)(PATH);
}
function adicionarCliente(nome, telefone) {
    const clientes = listarClientes();
    const novo = { id: Date.now(), nome, telefone };
    clientes.push(novo);
    (0, FileHandler_1.writeJSON)(PATH, clientes);
}
function atualizarCliente(id, nome, telefone) {
    const clientes = listarClientes();
    const idx = clientes.findIndex(c => c.id === id);
    if (idx >= 0) {
        clientes[idx].nome = nome;
        clientes[idx].telefone = telefone;
        (0, FileHandler_1.writeJSON)(PATH, clientes);
    }
}
function removerCliente(id) {
    let clientes = listarClientes();
    clientes = clientes.filter(c => c.id !== id);
    (0, FileHandler_1.writeJSON)(PATH, clientes);
}
