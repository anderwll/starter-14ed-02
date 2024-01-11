import request from 'supertest'
import { createServer } from '../../src/express.server'
import { ETipoAluno } from '../../src/enum/aluno.enum'
import repository from '../../src/database/prisma.connection'


// test("deve retornar 200 se a chamada for sucesso", async () => {
// const result = await request(server).get("/users").send();
// expect(result.statusCode).toBe(200);
// expect(result.body).toHaveProperty("ok");
// expect(result.body.ok).toEqual(true);
// expect(result.body).toHaveProperty("data");
// });

describe("Aluno Routes", ()=> {
    const server = createServer()
    afterEach(async () => {
        console.log('Executou o afterEach')
        await repository.aluno.deleteMany()
    })
    jest.setTimeout(100000)

    describe("Cadastrar - POST", ()=> {
        it("Deve retornar 400 quando faltar propriedades no body", async ()=> {

            const result = await request(server).post("/alunos").send()

            expect(result.statusCode).toBe(400)
            expect(result.body).toHaveProperty("ok", false)
            expect(result.body).toHaveProperty("mensagem", "Faltam campos!")
        })

        it("Deve retornar 400 quando o e-mail for inválido.", async () => {
            const result = await request(server).post("/alunos").send({
                nome: 'Ander catofla',
                senha: '132',
                tipo: 'T',
                email: 'email.com'
            })

            expect(result.statusCode).toBe(400)
            expect(result.body).toHaveProperty("ok", false)
            expect(result.body).toHaveProperty("mensagem", "E-mail inválido!")
        })

        it("Deve retornar 400 quando houver um usuário cadastrado com o mesmo e-mail", async () => {
            await repository.aluno.create({ data: {
                email: 'email@hotmail.com',
                nomeCompleto: 'Ander catofla',
                password: '125445'         
            }})

            const result = await request(server).post("/alunos").send({
                nome: 'Ander catofla',
                senha: '1321515',
                tipo: ETipoAluno.F,
                email: 'email@hotmail.com'
            })

            expect(result.statusCode).toBe(400)
            expect(result.body).toHaveProperty("ok", false)
            expect(result.body).toHaveProperty("mensagem", "E-mail já cadastrado")
        })

        it("Deve retornar 201 quando aluno for cadastrado com sucesso", async () => {
           
            const result = await request(server).post("/alunos").send({
                nome: 'Ander catofla',
                senha: '1321515',
                tipo: ETipoAluno.F,
                email: 'email@hotmail.com'
            })

            expect(result.statusCode).toBe(201)
            expect(result.body).toHaveProperty("ok", true)
            expect(result.body).toHaveProperty("mensagem", "Aluno cadastrado!")
            expect(result.body.dados).toStrictEqual({
                id: expect.any(String),
                nome: 'Ander catofla',
                email: 'email@hotmail.com',
                tipo: ETipoAluno.F
            })

          
        })
    })
})