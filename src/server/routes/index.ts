import { Router } from "express";

import { cidadesControllers } from "./../controllers";

const router = Router();

router.get('/', (req, res)=> {
   res.send('foi!!!!')
})

router.get('/cidades', cidadesControllers.getAllValidation, cidadesControllers.getAll)
router.post('/cidades', cidadesControllers.createValidation, cidadesControllers.create)
router.get('/cidades/:id', cidadesControllers.getByIdValidation, cidadesControllers.getById)
router.put('/cidades/:id', cidadesControllers.updateByIdValidation, cidadesControllers.updateById)
router.delete('/cidades/:id', cidadesControllers.deleteByIdValidation, cidadesControllers.deleteById)

export  {router};