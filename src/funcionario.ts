import Endereco from "./endereco"
import Telefone from "./telefone"

class Funcionario {
    nome: string
    matricula: string
    cpf: string
    endereco: Endereco
    telefone: Telefone

    constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
        this.nome = nome
        this.matricula = matricula
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }

    imprimirAtributos(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Matrícula: ${this.matricula}`)
        console.log(`CPF: ${this.cpf}`)
        this.endereco.imprimirAtributos()
        this.telefone.imprimirAtributos()
    }
}

export default Funcionario
