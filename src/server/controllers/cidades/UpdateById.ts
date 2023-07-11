import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../share/middleware';
import { cidadesProviders } from '../../database/providers/Cidades';
import { ICidade } from '../../database/models';


interface IParamsProps {
  id?: number;
}
interface IBodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
 if(!req.params.id) {
  return res.status(StatusCodes.BAD_REQUEST).json({
    errors: {
      default: 'O parâmentro id precisar ser informado'
    }
  })
 }

 const result = await cidadesProviders.UpdateById(req.params.id, req.body)

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  } 

  return res.status(StatusCodes.NO_CONTENT).json(result);
};