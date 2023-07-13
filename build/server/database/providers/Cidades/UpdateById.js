"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateById = void 0;
const __1 = require("../..");
const ETablesNames_1 = require("../../seed/ETablesNames");
const UpdateById = (id, cidade) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, __1.Knex)(ETablesNames_1.ETablesNames.cidade)
            .update(cidade)
            .where('id', '=', id);
        if (result > 0)
            return;
        return new Error('Error ao atualizar o registro');
    }
    catch (error) {
        console.log(error);
        return new Error('Error ao atualizar o registro');
    }
});
exports.UpdateById = UpdateById;
