export const alunoPath = {
  post: {
    tags: ["Cadastro"],
    summary: "Realiza o cadastro de um aluno",
    description: "Realiza o cadastro de um novo aluno",
    requestBody: {
      description: "Realiza o cadastro de um aluno",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              nome: {
                type: "string",
                example: "Xablau",
              },
              email: {
                type: "string",
                format: "email",
                example: "email@email.com",
              },
              senha: {
                type: "string",
                example: "senha123",
              },
              tipo: {
                type: "string - T ou M ou F",
                example: "T",
              },
            },
            required: ["nome", "email", "senha", "tipo"],
          },
        },
      },
    },
    responses: {
      201: {
        description: "Criado com sucesso",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ok: {
                  type: "boolean",
                  example: true,
                },
                code: {
                  type: "integer",
                  format: "int64",
                  example: 201,
                },
                mensagem: {
                  type: "string",
                  example: "Mensagem de successo",
                },
                dados: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      format: "uuid",
                      example: "45a303ac-9a1e-11ee-b9d1-0242ac120002",
                    },
                    nomeCompleto: {
                      type: "string",
                      example: "xablau da silva",
                    },
                    email: {
                      type: "string",
                      format: "email",
                      example: "xablau@teste.com",
                    },
                    password: {
                      type: "string",
                      example: "xablau123",
                    },
                    idade: {
                      type: "number",
                      example: 20,
                    },
                  },
                },
              },
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};
