"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome
        this.matricula = matricula
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
    Funcionario.prototype.imprimirAtributos = function () {
        console.log("Nome: ".concat(this.nome))
        console.log("Matr\u00EDcula: ".concat(this.matricula))
        console.log("CPF: ".concat(this.cpf))
        this.endereco.imprimirAtributos()
        this.telefone.imprimirAtributos()
    }
    return Funcionario
}())
exports.default = Funcionario
