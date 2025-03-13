class Telefone {
    ddd: string
    numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    imprimirAtributos(): void {
        console.log(`DDD: ${this.ddd}`)
        console.log(`Número: ${this.numero}`)
    }
}

export default Telefone