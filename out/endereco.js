"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.prototype.imprimirAtributos = function () {
        console.log("Rua: ".concat(this.rua, "   Bairro: ").concat(this.bairro, "   Cidade: ").concat(this.cidade, "   N\u00FAmero: ").concat(this.numero));
    };
    return Endereco;
}());
exports.default = Endereco;
