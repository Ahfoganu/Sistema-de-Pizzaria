import { Produto } from "../models/Produto";
import { readJSON, writeJSON } from "../utils/FileHandler";


const PATH = "data/produtos.json";


export function listarProdutos(): Produto[] {
return readJSON<Produto>(PATH);
}


export function adicionarProduto(nome: string, preco: number, categoria: "pizza" | "refri" | "sobremesa") {
const produtos = listarProdutos();
const novo: Produto = { id: Date.now(), nome, preco, categoria };
produtos.push(novo);
writeJSON(PATH, produtos);
}