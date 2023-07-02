import * as create from './create'
import * as GetAll from './GetAll'
import * as GetById from './GetById'
import * as updateById from './UpdateById'
import * as DeleteById from './DeleteById'

export const cidadesControllers = {
    ...create,
    ...GetAll,
    ...GetById,
    ...updateById,
    ...DeleteById,
}