import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../share/middleware";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { cidadesProviders } from "../../database/providers/Cidades";

interface IBodyProp extends Omit<ICidade,'id'> {}
export const createValidation = validation((getSchema)=>({
    body: getSchema<IBodyProp>(yup.object().shape({
        nome: yup.string().required().min(3).max(150),
    })),
}));


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const result = await cidadesProviders.create(req.body);

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }
    res.status(StatusCodes.CREATED).json(result)
}