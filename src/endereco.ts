class Endereco {
    numero: number
    rua: string
    bairro: string
    cidade: string

    constructor(numero: number, rua: string, bairro: string, cidade: string) {
        this.numero = numero
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
    }

    imprimirAtributos(): void {
        console.log(`Rua: ${this.rua}   Bairro: ${this.bairro}   Cidade: ${this.cidade}   Número: ${this.numero}`)
    }
}

export default Endereco