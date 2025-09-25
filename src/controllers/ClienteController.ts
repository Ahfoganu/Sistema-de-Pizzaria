import { Cliente } from "../models/Cliente";
import { readJSON, writeJSON } from "../utils/FileHandler";


const PATH = "data/clientes.json";


export function listarClientes(): Cliente[] {
return readJSON<Cliente>(PATH);
}


export function adicionarCliente(nome: string, telefone: string) {
const clientes = listarClientes();
const novo: Cliente = { id: Date.now(), nome, telefone };
clientes.push(novo);
writeJSON(PATH, clientes);
}


export function atualizarCliente(id: number, nome: string, telefone: string) {
const clientes = listarClientes();
const idx = clientes.findIndex(c => c.id === id);
if (idx >= 0) {
clientes[idx].nome = nome;
clientes[idx].telefone = telefone;
writeJSON(PATH, clientes);
}
}


export function removerCliente(id: number) {
let clientes = listarClientes();
clientes = clientes.filter(c => c.id !== id);
writeJSON(PATH, clientes);
}