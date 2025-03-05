import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
    await knex(ETablesNames)
    
}

export enum ETablesNames {
    cidade = 'cidade'
}