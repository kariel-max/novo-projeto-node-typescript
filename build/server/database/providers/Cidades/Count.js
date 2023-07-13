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
exports.count = void 0;
const __1 = require("../..");
const ETablesNames_1 = require("../../seed/ETablesNames");
const count = (filter = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [{ count }] = yield (0, __1.Knex)(ETablesNames_1.ETablesNames.cidade)
            .where('nome', 'like', `%${filter}%`)
            .count('* as count');
        if (Number.isInteger(Number(count)))
            return Number(count);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
});
exports.count = count;
