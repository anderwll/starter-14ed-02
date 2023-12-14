export const responseError = {
  type: "object",
  properties: {
    code: {
      type: "integer",
      format: "int64",
      example: 401,
    },
    ok: {
      type: "boolean",
      example: false,
    },
    mensagem: {
      type: "string",
      example: "Mensagem de erro",
    },
  },
  required: ["ok", "code", "mensagem"],
};
