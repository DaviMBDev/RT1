"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(funcionarios, endereco, nome, setor, cnpj, telefones) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.nome = nome;
        this.setor = setor;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
    Empresa.prototype.imprimirAtributos = function () {
        console.log("Empresa: ".concat(this.nome));
        console.log("Setor: ".concat(this.setor));
        console.log("CNPJ: ".concat(this.cnpj));
        this.endereco.imprimirAtributos();
        this.funcionarios.forEach(function (funcionario) { return funcionario.imprimirAtributos(); });
        this.telefones.forEach(function (telefone) { return telefone.imprimirAtributos(); });
    };
    return Empresa;
}());
exports.default = Empresa;
