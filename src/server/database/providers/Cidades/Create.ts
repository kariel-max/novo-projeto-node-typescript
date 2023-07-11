import { Knex } from "../..";
import { ICidade } from "../../models";
import { ETablesNames } from "../../seed/ETablesNames";

export const create = async (cidade:Omit<ICidade, 'id'>):Promise<number | Error>=> {
 
    try {

        const [result] = await Knex(ETablesNames).insert(cidade).returning('id')

        if ( typeof result === 'object' ) {
            return result.id;
        } else if (typeof result === 'number' ) {
            return result;
        }
        return new Error('Error no cadastro do registro!!');
    } catch (error) {
        console.log(error);
        
        return new Error('Error de registro!!');

    }

}