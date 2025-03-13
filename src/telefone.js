"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
    Telefone.prototype.imprimirAtributos = function () {
        console.log("DDD: ".concat(this.ddd))
        console.log("N\u00FAmero: ".concat(this.numero))
    }
    return Telefone
}())
exports.default = Telefone
