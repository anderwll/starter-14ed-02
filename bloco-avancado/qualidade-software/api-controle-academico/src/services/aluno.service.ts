import {
  Aluno as AlunoPrisma,
  Endereco as EnderecoPrisma,
} from "@prisma/client";
import { JWTAdapter } from "../adapters/jwt.adapter";
import repository from "../database/prisma.connection";
import {
  AtualizarAlunoDTO,
  CadastrarAlunoDTO,
  LoginDTO,
  ResponseDTO,
} from "../dtos";
import { ETipoAluno } from "../enum/aluno.enum";
import envs from "../envs";
import { Aluno, Endereco } from "../models";

export class AlunoService {
  public async cadastrar(dados: CadastrarAlunoDTO): Promise<ResponseDTO> {
    const alunoExiste = await repository.aluno.findUnique({
      where: { email: dados.email },
    });

    if (alunoExiste) {
      return {
        code: 400,
        ok: false,
        mensagem: "E-mail já cadastrado",
      };
    }

    const alunoDB = await repository.aluno.create({
      data: {
        email: dados.email,
        nomeCompleto: dados.nome,
        password: dados.senha,
        idade: dados.idade,
        tipo: dados.tipo,
      },
    });

    return {
      code: 201,
      ok: true,
      mensagem: "Aluno cadastrado!",
      dados: this.mapToModel({ ...alunoDB, endereco: null }).toJSON(),
    };
  }

  public async listar(): Promise<ResponseDTO> {
    const alunosDB = await repository.aluno.findMany({
      orderBy: { nomeCompleto: "desc" },
      include: { endereco: true },
    });

    if (!alunosDB.length) {
      return {
        code: 404,
        ok: false,
        mensagem: "Não foram encontrados alunos cadastrados no sistema.",
      };
    }

    return {
      code: 200,
      ok: true,
      mensagem: "Alunos listados com sucesso",
      dados: alunosDB.map((a) => this.mapToModel(a).toJSON()),
    };
  }

  public async listarPorID(id: string): Promise<ResponseDTO> {
    const alunoDB = await repository.aluno.findUnique({
      where: {
        id: id,
      },
      include: { endereco: true },
    });

    if (!alunoDB) {
      return {
        code: 404,
        ok: false,
        mensagem: "Aluno não encontrado",
      };
    }

    return {
      code: 200,
      ok: true,
      mensagem: "Aluno encontrado",
      dados: this.mapToModel(alunoDB),
    };
  }

  public async atualizar(dados: AtualizarAlunoDTO): Promise<ResponseDTO> {
    const alunoAtualizado = await repository.aluno.update({
      where: { id: dados.idAluno },
      data: {
        nomeCompleto: dados.nome,
        idade: dados.idade,
        password: dados.senha,
      },
      include: { endereco: true },
    });

    return {
      code: 200,
      ok: true,
      mensagem: "Aluno atualizado",
      dados: this.mapToModel(alunoAtualizado),
    };
  }

  public async deletar(id: string): Promise<ResponseDTO> {
    const alunoExcluido = await repository.aluno.delete({
      where: { id: id },
      include: { endereco: true },
    });

    return {
      code: 200,
      ok: true,
      mensagem: "Aluno excluido",
      dados: this.mapToModel(alunoExcluido),
    };
  }

  public async login(dados: LoginDTO): Promise<ResponseDTO> {
    const alunoEncontrado = await repository.aluno.findUnique({
      where: {
        email: dados.email,
        password: dados.senha,
      },
    });

    if (!alunoEncontrado) {
      return {
        code: 401,
        ok: false,
        mensagem: "Credenciais inválidas",
      };
    }

    const alunoModel = this.mapToModel({ ...alunoEncontrado, endereco: null });

    const jwt = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
    const token = jwt.gerarToken(alunoModel.toJSON());

    return {
      code: 200,
      ok: true,
      mensagem: "Login efetuado",
      dados: { user: alunoModel.toJSON(), token },
    };
  }

  private mapToModel(
    alunoDB: AlunoPrisma & { endereco: EnderecoPrisma | null }
  ): Aluno {
    const endereco = alunoDB?.endereco
      ? new Endereco(
          alunoDB.endereco.id,
          alunoDB.endereco.logradouro,
          alunoDB.endereco.cep,
          alunoDB.endereco.numero,
          alunoDB.endereco.cidade,
          alunoDB.endereco.uf,
          alunoDB.endereco.complemento ?? undefined
        )
      : undefined;

    return new Aluno(
      alunoDB.id,
      alunoDB.nomeCompleto,
      alunoDB.email,
      alunoDB.password,
      ETipoAluno[alunoDB.tipo],
      alunoDB.idade ?? undefined
    );
  }
}
