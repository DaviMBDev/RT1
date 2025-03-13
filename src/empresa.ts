import Funcionario from "./funcionario"
import Endereco from "./endereco"
import Telefone from "./telefone"

class Empresa {
    funcionarios: Funcionario[]
    endereco: Endereco
    nome: string
    nomeFantasia: string
    cnpj: string
    telefones: Telefone[]

    constructor(funcionarios: Funcionario[], endereco: Endereco, nome: string, nomeFantasia: string, cnpj: string, telefones: Telefone[]) {
        this.funcionarios = funcionarios
        this.endereco = endereco
        this.nome = nome
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.telefones = telefones
    }

    imprimirAtributos(): void {
        console.log(`Empresa: ${this.nome}`)
        console.log(`Nome Fantasia: ${this.nomeFantasia}`)
        console.log(`CNPJ: ${this.cnpj}`)
        this.endereco.imprimirAtributos()
        this.funcionarios.forEach(funcionario => funcionario.imprimirAtributos())
        this.telefones.forEach(telefone => telefone.imprimirAtributos())
    }
}

export default Empresa