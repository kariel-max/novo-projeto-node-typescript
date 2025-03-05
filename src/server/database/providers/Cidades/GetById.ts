import { Knex } from "../..";
import { ICidade } from "../../models";
import { ETablesNames } from "../../seeds/ETablesNames";

export const getById = async  (id: number):Promise<ICidade | Error>=> {
 
    try {

        const result = await Knex(ETablesNames.cidade)
        .select('*')
        .where('id','=', id)
        .first()

        if (result) return result;
        return new Error('Registro não encontrado');
    } catch (error) {
        console.log(error);
        
        return new Error('Error de registro (id)!!');
    }

}