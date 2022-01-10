import Respostas from "../../model/Respostas"
import styles from "./styles.module.css"

interface RespostaProps {
    valor: Respostas
    indece: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function RespostaComponente(props: RespostaProps) {

    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''

    return (
        <div className={styles.resposta} onClick={event => props.respostaFornecida(props.indece)} >
            <div className={styles.conteudo + " " + respostaRevelada}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                    {resposta.certa ? (
                        <div className={styles.certo}>
                            <div>A resposta certa é...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errado}>
                            <div>A resposta informada esstá errada...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}