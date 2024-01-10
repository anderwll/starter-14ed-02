
// test("deve retornar 200 se a chamada for sucesso", async () => {
// const result = await request(server).get("/users").send();
// expect(result.statusCode).toBe(200);
// expect(result.body).toHaveProperty("ok");
// expect(result.body.ok).toEqual(true);
// expect(result.body).toHaveProperty("data");
// });

describe("Aluno Routes", ()=> {
    describe("Cadastrar - POST", ()=> {
        it("Deve retornar 400 quando faltar propriedades no body", async ()=> {})
        it("Deve retornar 201 quando aluno for cadastrado com sucesso", async () => {});
    })
})