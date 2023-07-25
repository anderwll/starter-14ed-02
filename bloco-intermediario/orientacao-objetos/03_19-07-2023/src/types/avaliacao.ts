export type NotaAvaliacao = 1 | 2 | 3 | 4 | 5;

export interface Avaliacao {
  notaAvalicao: NotaAvaliacao;
  username: string;
}
