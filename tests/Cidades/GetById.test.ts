import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('Cidades - GetById', ()=> {
    it('Buscar regitro por id', async ()=> {
        const res1 = await testServer.post('/cidades').send({nome: 'Porto Franco'})

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const BuscarId = await testServer.get(`/cidades/${res1.body}`).send();

        expect(BuscarId.statusCode).toEqual(StatusCodes.OK)
        expect(BuscarId.body).toHaveProperty('nome')
    })
    it('Tentar buscar por registro não existente', async ()=> {
        const res1 = await testServer.get('/cidades/99999').send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res1.body).toHaveProperty('errors.default')
    })
})