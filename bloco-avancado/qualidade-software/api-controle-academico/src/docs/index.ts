import { badRequest, serverError, unauthorized } from "./components";
import { defaultProperties } from "./defaultProperties";
import { responseError } from "./schemas";

export const swaggerDocs = {
  openapi: "3.0.3",
  info: {
    title: "API Controle Acadêmico",
    description:
      "Essa aplicação tem como objetivo fazer o controle dos alunos e suas respectivas avaliações.",
    contact: {
      email: "growdev@growdev.com.br",
    },
    version: "1.3.1",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  paths: {
    "/auth/login": {
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
    },
    "/alunos": {},
    "/avaliacoes": {},
  },
  components: {
    badRequest: badRequest,
    unauthorized: unauthorized,
    serverError: serverError,
  },
  schemas: {
    responseError: responseError,
  },
};
