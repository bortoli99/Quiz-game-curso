import Questao from "../../model/Questao"
import BotaoComponente from "../Botao"
import QuestaoComponente from "../Questao"
import styles from "./styles.module.css"

interface QuestionarioProps {
    questao: Questao
    ultima: boolean
    questaoRespondida: (questao: Questao) => void
    irParaProximoPasso: () => void
}

export default function QuestionarioComponente(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.reponderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {
                props.questao ?
                    <QuestaoComponente valor={props.questao} tempoParaRespotas={6} respostaFornecida={respostaFornecida} tempoEsgotado={props.irParaProximoPasso} />
                    :
                    false
            }
            <BotaoComponente onClick={props.irParaProximoPasso} texto={props.ultima ? "Finalizar" : "Próxima"} />
        </div>
    )
}