import Questao from "../../model/Questao";
import Enunciado from "../Enunciado";
import RespostaComponente from "../Resposta";
import TemporizadorComponente from "../Temporizador";
import styles from "./styles.module.css"

interface QuestaoProps {
    valor: Questao
    tempoParaRespotas?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85D4F2' },
    { valor: 'D', cor: '#BCE596' },
]

export default function QuestaoComponente(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRepostas() {
        return questao.respostas.map((resposta, key) => {
            return (
                <RespostaComponente
                    key={`${key}${questao.id}`}
                    valor={resposta}
                    indece={key}
                    letra={letras[key].valor}
                    corFundoLetra={letras[key].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }
    

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <TemporizadorComponente duracao={props.tempoParaRespotas ?? 10} tempoEsgotado={props.tempoEsgotado} key={questao.id} />
            {renderizarRepostas()}
        </div>
    )
}