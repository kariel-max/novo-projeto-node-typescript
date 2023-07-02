import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('cidades - create', ()=> {
    it ('cria registro',async ()=> {
        const res1 = await testServer
        .post('/cidades')
        .send({nome: 'caxias do sul'})

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof res1.body).toEqual('number')
    })
    it ('tantar cria registro com um nome muito curto',async ()=> {
        const res1 = await testServer
        .post('/cidades')
        .send({nome: 'ca'})

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(res1.body).toHaveProperty('errors.body.nome')
    })
})

