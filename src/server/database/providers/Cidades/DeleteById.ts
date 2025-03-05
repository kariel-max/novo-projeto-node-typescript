import { Knex } from "../..";
import { ETablesNames } from "../../seeds/ETablesNames";

export const DeleteById = async (id: number):Promise<void | Error> => {

    try {
    const result = await Knex(ETablesNames.cidade)
    .where('id', '=', id)
    .del();

    if (result > 0) return;

    return new Error('Erro ao apagar o registro');
    } catch (error) {
        console.log(error);
        
        return new Error('error ao deletar o registro (id)')
    }

}