import * as rl from "readline-sync";
import { adicionarCliente, listarClientes } from "./controllers/ClienteController";
import { adicionarProduto, listarProdutos } from "./controllers/ProdutoController";
import { adicionarPedido, listarPedidos, relatorioPorDia, relatorioPorMes } from "./controllers/PedidoController";


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
adicionarCliente(nome, tel);
break;
case "2":
console.log(listarClientes());
break;
case "3":
const nomeP = rl.question("Produto: ");
const preco = parseFloat(rl.question("Preço: "));
const cat = rl.question("Categoria (pizza/refri/sobremesa): ") as any;
adicionarProduto(nomeP, preco, cat);
break;
case "4":
console.log(listarProdutos());
break;
case "5":
const clienteId = parseInt(rl.question("ID do cliente: "));
const prods = rl.question("IDs dos produtos (separados por virgula): ")
.split(",")
.map(Number);
adicionarPedido(clienteId, prods);
console.log("Pedido realizado! Comprovante gerado em dist/comprovantes");
break;
case "6":
console.log(listarPedidos());
break;
case "7":
const dia = rl.question("Dia (YYYY-MM-DD): ");
console.log(relatorioPorDia(dia));
break;
case "8":
const mes = rl.question("Mês (YYYY-MM): ");
console.log(relatorioPorMes(mes));
break;
}
}
}


main();