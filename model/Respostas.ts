export default class Respostas {
    #valor: string
    #certa: boolean // outra forma private certa
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return new Respostas(valor, true)
    }

    static errada(valor: string){
        return new Respostas(valor, false)
    }

    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }
    
    get revelada(){
        return this.#revelada
    }

    revelar(): Respostas{
        return new Respostas(this.#valor, this.#certa, true)
    }

    toObject(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

    static fromObject(model: Respostas): Respostas{
        return new Respostas(model.valor, model.certa, model.revelada)
    }

}