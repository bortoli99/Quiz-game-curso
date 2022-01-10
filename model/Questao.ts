import { embaralhar } from "../functions/arrays"
import Respostas from "./Respostas"

export default class Questao {
    #id: number
    #enunciado: string
    #respostas: Respostas[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: Respostas[], acertou = false){
        this.#id = id
        this.#acertou = acertou
        this.#enunciado = enunciado
        this.#respostas = respostas
    }

    get id(){
        return this.#id
    }

    get enunciado(){Respostas
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get naoRespondida(){
        return !this.respondida
    }

    get respondida(){
        
        for(let resposta of this.#respostas){
            if(resposta.revelada){
                return true
            }
        }

        return false
    }
    
    reponderCom(indice: number):Questao{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, key) => {
            const respostaSelecionada = indice === key
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new Questao(this.#id, this.#enunciado, respostas, acertou)
    }

    embaralharRespostas(): Questao{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new Questao(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    toObject(){
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resposta => resposta.toObject()),
            acertou: this.#acertou,
            respondida: this.respondida
        }
    }

    static fromObject(model: Questao) : Questao{
        const respostas = model.respostas.map(resposta => Respostas.fromObject(resposta))
        return new Questao(model.id, model.enunciado, respostas, model.acertou)
    }

}