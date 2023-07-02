import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../share/middleware';


interface IParamsProps {
  id?: number;
}
interface IBodyProps {
  nome?: string
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {

  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encotrado'
    }
  })

  return res.status(StatusCodes.NO_CONTENT).json('Não implementado');
};