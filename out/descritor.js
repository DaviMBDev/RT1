"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (objeto) {
        if (objeto.imprimirAtributos) {
            objeto.imprimirAtributos();
        }
        else {
            console.log("O objeto não possui o método imprimirAtributos.");
        }
    };
    return Descritor;
}());
exports.default = Descritor;
