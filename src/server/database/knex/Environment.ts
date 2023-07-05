import { Knex } from "knex";
import Path from "path";

export const development: Knex.Config = {
    client: 'sqlite',
    useNullAsDefault: true,
    connection: {
        filename: Path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite')
    },
    migrations:  {
        directory: Path.resolve(__dirname, '..', 'migrations')
    },
    seeds:  {
        directory: Path.resolve(__dirname, '..', 'seeds')
    },
    pool: {
        afterCreate: (connection: any, done: Function )=> {
                connection.run('PRAGMA foreign_keys = NO')
                done();
        }
    }
};

export const test: Knex.Config = {
    ...development,
    connection: ':memory:',
};

export const production: Knex.Config = {
    ...development,
};