import { ETipoAluno } from "../../src/enum/aluno.enum"
import { Aluno } from "../../src/models/aluno.model"

describe("Aluno Model", ()=> {

    const createSut = ()=>{
        return new Aluno( "any_id", "any_nome", "any_email", "any_senha", ETipoAluno.M, 23)
    }

    afterAll(()=>{
        console.log("executou ---")
    })

    test("deve retornar o id do aluno criado", () => {
        const sut = createSut()
        
        const result = sut.id


        expect(result).toBeDefined()
        expect(result).toBe("any_id")

    })

    it("deve retornar todas as informações menos a senha do aluno criado",()=>{
         const sut = createSut()



         const result = sut.toJSON()

         expect(result).toBeDefined()
         expect(result).toHaveProperty("id","any_id")
         expect(result).toHaveProperty("nome","any_nome")
         expect(result).toHaveProperty("email")

         expect(result).toStrictEqual({
           id: "any_id",
           nome: "any_nome",
           email: "any_email",
           idade: 23,
           tipo: ETipoAluno.M,
            endereco: undefined,
         });
    })

})