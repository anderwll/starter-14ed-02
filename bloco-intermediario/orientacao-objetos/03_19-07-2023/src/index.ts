import { Produto } from "./classes/produto";
import { Usuario } from "./classes/usuario";

// USUARIOS
const joao = new Usuario("João Perreira", "@joao_perreira");

// PRODUTOS
const camisa = new Produto("Camisa Lacosti", 30);
const calca = new Produto("Calça de sair", 200);
const sapato = new Produto("Tenis 12 molas", 500);

// ADICIONA PRODUTOS
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(calca);
joao.addProduto(sapato);

// LOGS
console.log(joao);
