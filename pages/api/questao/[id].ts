import questoes from "../banco/questao"

export default function handler(req, res) {

    const id = + req.query.id
    const questao = questoes.filter(questaoFiltrada => id === questaoFiltrada.id)


    if(questao.length === 1){
        res.status(200).json(questao.map(questaoComRespostaEmbaralhada => questaoComRespostaEmbaralhada.embaralharRespostas()).map(questao => questao.toObject()))
    } else {
        res.status(204).send()
    }

}
