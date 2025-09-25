export interface Pedido {
id: number;
clienteId: number;
produtos: number[]; // IDs dos produtos
data: string; // ISO string
total: number;
}