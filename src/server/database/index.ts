import { knex } from "knex";
import { development, production, test} from './knex/Environment';

const getEnvionment = ()=> {
    switch (process.env.NODE_ENV) {
        case 'production': return production;
        case 'test': return test;
        
        default: return development;
    }
}

export const Knex = knex(getEnvionment());