"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send('foi!!!!');
});
router.get('/cidades', controllers_1.cidadesControllers.getAllValidation, controllers_1.cidadesControllers.getAll);
router.post('/cidades', controllers_1.cidadesControllers.createValidation, controllers_1.cidadesControllers.create);
router.get('/cidades/:id', controllers_1.cidadesControllers.getByIdValidation, controllers_1.cidadesControllers.getById);
router.put('/cidades/:id', controllers_1.cidadesControllers.updateByIdValidation, controllers_1.cidadesControllers.updateById);
router.delete('/cidades/:id', controllers_1.cidadesControllers.deleteByIdValidation, controllers_1.cidadesControllers.deleteById);
