import { ETipoAluno } from "../enum/aluno.enum";

export interface CadastrarAlunoDTO {
  nome: string;
  email: string;
  senha: string;
  tipo: ETipoAluno;
  idade?: number;
}
