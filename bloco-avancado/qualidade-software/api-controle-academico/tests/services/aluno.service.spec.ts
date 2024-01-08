import { Aluno, TipoAluno } from "@prisma/client";
import { CadastrarAlunoDTO } from "../../src/dtos";
import { ETipoAluno } from "../../src/enum/aluno.enum";
import { Aluno as AlunoModel } from "../../src/models";
import { AlunoService } from "../../src/services";
import { prismaMock } from "../config/prisma.mock";
describe("Aluno Service", () => {
  const createSut = () => {
    return new AlunoService();
  };

  describe("Cadastrar", () => {
    const createAlunoDTO: CadastrarAlunoDTO = {
      email: "teste@teste.com",
      nome: "teste",
      senha: "xablau123",
      tipo: ETipoAluno.T,
    };

    it("deve retornar email já cadastrado quando já existir um aluno com esse email", async () => {
      // criar o sut
      const sut = createSut();
      //mock do prisma
      prismaMock.aluno.findUnique.mockResolvedValue({} as Aluno);
      //chamar o método
      const result = await sut.cadastrar(createAlunoDTO);
      //criar os expect

      expect(result.code).toBe(400);
      expect(result.ok).toBeFalsy();
      expect(result).toHaveProperty("mensagem", "E-mail já cadastrado");
    });

    it("deve retornar Aluno cadastrado quando sucesso", async () => {
      const sut = createSut();

      prismaMock.aluno.findUnique.mockResolvedValue(null);
      prismaMock.aluno.create.mockResolvedValue({
        id: "any_id",
        email: "any_email",
        nomeCompleto: "any_nome",
        password: "any_password",
        tipo: TipoAluno.T,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
        idade: null,
      });

      const result = await sut.cadastrar(createAlunoDTO);

      expect(result.code).toBe(201);
      expect(result.ok).toBeTruthy();
      expect(result).toHaveProperty("mensagem", "Aluno cadastrado!");
      expect(result.dados).toStrictEqual({
        id: "any_id",
        nome: "any_nome",
        email: "any_email",
        idade: undefined,
        tipo: TipoAluno.T,
        endereco: undefined,
      });
    });
  });

  describe("Listar", () => {
    it("Deve retornar 404 quando não encontrar alunos no banco", async () => {
      const sut = createSut();

      prismaMock.aluno.findMany.mockResolvedValue([]);
      const result = await sut.listar();

      expect(result).toHaveProperty("code", 404);
      expect(result).toHaveProperty("ok", false);
      expect(result).toHaveProperty(
        "mensagem",
        "Não foram encontrados alunos cadastrados no sistema."
      );
    });

    it("Deve retornar um aluno quando houver no banco", async () => {
      const sut = createSut();

      prismaMock.aluno.findMany.mockResolvedValue([
        {
          id: "any_id",
          email: "any_email",
          nomeCompleto: "any_nome",
          password: "any_password",
          tipo: TipoAluno.T,
          criadoEm: new Date(),
          atualizadoEm: new Date(),
          idade: null,
        },
      ]);

      const result = await sut.listar();

      expect(result).toHaveProperty("code", 200);
      expect(result).toHaveProperty("ok", true);
      expect(result).toHaveProperty("mensagem", "Alunos listados com sucesso");
      expect(result.dados).toHaveLength(1);
      result.dados.map((a: AlunoModel) => {
        expect(a).toStrictEqual({
          id: "any_id",
          nome: "any_nome",
          email: "any_email",
          idade: undefined,
          tipo: TipoAluno.T,
          endereco: undefined,
        });
      });
    });
  });

  describe("Listar Por ID", () => {});

  describe("Atualizar", () => {});

  describe("Deletar", () => {});

  describe("Login", () => {});
});
