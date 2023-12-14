import { badRequest, serverError, unauthorized } from "./components";
import { authPath } from "./paths";
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
    "/auth/login": authPath,
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
