// Crie uma classe chamada Produto que deve conter um
// nome, preco, quantidade de estoque e suas devidas categorias.
// - Deve ser possivel adicionar mais estoque ao produto.
// - Deve ser possivel adicionar e remover categorias a esse produto.

export class Produto {
  // Atributos Propriedades
  nome: string;
  preco: number;
  quantidadeEstoque: number;
  categorias: Array<string>;

  constructor(nome: string, preco: number, qtnEstoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEstoque = qtnEstoque;
    this.categorias = [];
  }

  // Metodos
  adicionarEstoque(valor: number): void {
    this.quantidadeEstoque += valor;
  }

  adicionarCategoria(cat: string): void {
    this.categorias.push(cat);
  }

  removerCategoria(nomeCat: string): void {
    const indice = this.categorias.findIndex(
      (categoria) => categoria === nomeCat
    );

    if (indice === -1) {
      console.log("Categoria não encontrada.");
    } else {
      this.categorias.splice(indice, 1);
    }
  }
}
