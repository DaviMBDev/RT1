class Descritor {
    descrever(objeto: any): void {
        if (objeto.imprimirAtributos) {
            objeto.imprimirAtributos()
        } else {
            console.log("O objeto não possui o método imprimirAtributos.")
        }
    }
}

export default Descritor