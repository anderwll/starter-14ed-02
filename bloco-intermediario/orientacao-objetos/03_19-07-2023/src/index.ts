import { Comentario } from "./classes/comentario";
import { Produto } from "./classes/produto";
import { Usuario } from "./classes/usuario";
import { listaUsuarios } from "./database/usuarios";
import { Avaliacao } from "./types/avaliacao";

// USUARIOS
const joao = new Usuario("João Perreira", "@joao_perreira");
const maria = new Usuario("Maria Lurdes", "@maria_lurdes_ofc");

listaUsuarios.push(joao);
listaUsuarios.push(maria);

// PRODUTOS
const camisa = new Produto("Camisa Lacosti", 30);
const calca = new Produto("Calça de sair", 200);
const sapato = new Produto("Tenis 12 molas", 500);

const chinelo = new Produto("Havaianas", 48);

// ADICIONA PRODUTOS
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(camisa);
joao.addProduto(calca);
joao.addProduto(sapato);

// REMOVE PRODUTOS
joao.removeProduto(camisa);

// LOGS
joao.visualizarProdutos();
joao.visualizar();

// LOGS PRODUTO
chinelo.visualizar();

// COMENTÁRIOS
const comentario1 = new Comentario("Produto muito bom, original pakas.", maria);
const comentario2 = new Comentario("Produto razoável, não é original.", joao);

// ADICIONAR COMENTÁRIOS AOS PRODUTOS
camisa.addComentario(comentario1);
camisa.addComentario(comentario2);

camisa.visualizarDetalhes();

// ADICIONAR AVALIAÇÃO
calca.addAvaliacao(4, "@joao_perreira");
calca.addAvaliacao(1, "@joao_perreira");
