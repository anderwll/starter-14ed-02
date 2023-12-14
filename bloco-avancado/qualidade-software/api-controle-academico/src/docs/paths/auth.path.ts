import { defaultProperties } from "../defaultProperties";

export const authPath = {
  post: {
    tags: ["Autenticação"],
    summary: "Realiza o login retornando um token.",
    description: "Realiza o login retornando um token.",
    requestBody: {
      description: "Realiza o login retornando um token.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                format: "email",
                example: "email@email.com",
              },
              senha: {
                type: "string",
                example: "senha123",
              },
            },
            required: ["email", "senha"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "Sucesso na operação",
        content: {
          "aplication/json": {
            schema: {
              type: "object",
              properties: {
                ...defaultProperties,
                dados: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        id: {},
                        nome: {},
                        email: {},
                        idade: {},
                        tipo: {},
                        endereco: {},
                      },
                    },
                    token: {
                      type: "string",
                      format: "JWT",
                      example:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
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
      401: {
        $ref: "#/components/unauthorized",
      },
      500: {
        $ref: "#/components/serverError",
      },
    },
  },
};
