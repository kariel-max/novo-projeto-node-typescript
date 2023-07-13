"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./server/app");
app_1.app.listen(process.env.PORT, () => {
    console.log("conectou!!!!!!!");
});
