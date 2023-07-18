import { Produto } from "./classes/produto";
import { Contador } from "./classes/contador";
import { Bola } from "./classes/bola";
import { ContaCorrente } from "./classes/contaCorrente";
import { Calculadora } from "./classes/calculadora";
import { BombaCombustivel } from "./classes/bombaCombustivel";

// ---- EXEMPLO ----
const note = new Produto("Mac Book", 15000, 2);
console.log(note);
note.adicionarEstoque(2);
note.adicionarCategoria("Informática");
note.adicionarCategoria("Eletro");
console.log(note);
note.removerCategoria("Eletro");
console.log(note);

// ---- ATIVIDADE 1 ----
const contador = new Contador(6);
contador.retornarValor();
contador.zerar();
contador.retornarValor();
contador.incrementar();
contador.retornarValor();

// ---- ATIVIDADE 2 ----
const bola1 = new Bola("vermelho", 0.45, "coro");
bola1.mostrarCor();
bola1.trocaCor("roxo");
bola1.mostrarCor();

// ---- ATIVIDADE 3 ----
const pessoa = new ContaCorrente(123, "Felipe Gustavo");
const pessoa2 = new ContaCorrente(321, "Wallace Dev", 1000);
pessoa.alterarNome("Eduarda");
pessoa.depositar(5000);
pessoa.sacar(4000);
pessoa.sacar(2000);

// ---- ATIVIDADE 4 ----
const calculadora = new Calculadora();
calculadora.somar(1, 1);
calculadora.diminuir(2, 3);
calculadora.dividir(4, 2);
calculadora.multiplicar(5, 5);
calculadora.visualizarHistorico();

// ---- ATIVIDADE 5 ----
const bomba = new BombaCombustivel("Etanol", 6, 20);
bomba.abastecerPorLitro(4); // 4 litros
bomba.abastecerPorValor(7); // reais - 1.17 litros
bomba.alterarCombustivel("Alccol");
bomba.alterarQuantidadeCombustivel(14.84);
bomba.alterarValor(10);
console.log(bomba);
