import * as create from './Create'
import * as GetAll from './GetAll'
import * as GetById from './GetById'
import * as updateById from './UpdateById'
import * as DeleteById from './DeleteById'
import * as count from './Count'

export const cidadesProviders = {
    ...create,
    ...GetAll,
    ...GetById,
    ...updateById,
    ...DeleteById,
    ...count,
}