import supertest from "supertest";

import { app } from "../src/server/app";
import { Knex } from "../src/server/database";


beforeAll( async ()=> {
    await Knex.migrate.latest();
})

afterAll( async ()=>{
    await Knex.destroy();
})

export const testServer = supertest(app);