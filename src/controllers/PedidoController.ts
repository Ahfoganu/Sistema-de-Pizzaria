import { Pedido } from "../models/Pedido";
import { Produto } from "../models/Produto";
import { readJSON, writeJSON, saveReceipt } from "../utils/FileHandler";
import { listarProdutos } from "./ProdutoController";
import { listarClientes } from "./ClienteController";


const PATH = "data/pedidos.json";


export function listarPedidos(): Pedido[] {
return readJSON<Pedido>(PATH);
}


export function adicionarPedido(clienteId: number, produtosIds: number[]) {
const pedidos = listarPedidos();
const produtos = listarProdutos();
const clientes = listarClientes();


const selecionados: Produto[] = produtos.filter(p => produtosIds.includes(p.id));
const total = selecionados.reduce((acc, p) => acc + p.preco, 0);
const cliente = clientes.find(c => c.id === clienteId);


const novo: Pedido = {
id: Date.now(),
clienteId,
produtos: produtosIds,
data: new Date().toISOString(),
total
};
pedidos.push(novo);
writeJSON(PATH, pedidos);


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


saveReceipt(recibo, `pedido_${novo.id}.txt`);
}


// Relatórios: pizzas por dia e mês
export function relatorioPorDia(dia: string) {
const pedidos = listarPedidos();
return pedidos.filter(p => p.data.startsWith(dia));
}


export function relatorioPorMes(mes: string) {
const pedidos = listarPedidos();
return pedidos.filter(p => p.data.substring(0, 7) === mes);
}