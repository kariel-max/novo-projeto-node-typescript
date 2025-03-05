import { Knex } from "../..";
import { ICidade } from "../../models";
import { ETablesNames } from "../../seeds/ETablesNames";


export const UpdateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {

    try {
        const result = await Knex(ETablesNames.cidade)
            .update(cidade)
            .where('id', '=', id)

        if (result > 0) return;

        return new Error('Error ao atualizar o registro')
    } catch (error) {
        console.log(error);
        
        return new Error('Error ao atualizar o registro')


    }

}