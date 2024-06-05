"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getAllTasks = void 0;
var connection_1 = require("./connection");
function getAllTasks() {
    return (0, connection_1.default)("todos").select();
}
exports.getAllTasks = getAllTasks;
function getTaskById(id) {
    return (0, connection_1.default)("todos").where({ id: id }).first();
}
exports.getTaskById = getTaskById;
console.log(getTaskById(2));
