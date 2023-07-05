import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../share/middleware";
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";

interface IBodyProp extends Omit<ICidade,'id'> {}
export const createValidation = validation((getSchema)=>({
    body: getSchema<IBodyProp>(yup.object().shape({
        nome: yup.string().required().min(3),
    })),
}));


export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    res.status(StatusCodes.CREATED).json(1)
}