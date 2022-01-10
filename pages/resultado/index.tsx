import { useRouter } from "next/router"
import BotaoComponente from "../../components/Botao"
import EstatisticaComponente from "../../components/Estatistica"
import styles from "./styles.module.css"

export default function ResutadoPage() {

    const router = useRouter()

    const total = + router.query.total
    const acertadas = + router.query.acertadas
    const percentual = Math.round((acertadas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: "flex" }}>
                <EstatisticaComponente valor={total} texto="Perguntas" />
                <EstatisticaComponente valor={acertadas} texto="Certas"  corFundo="#9CD2A4" />
                <EstatisticaComponente valor={percentual + "%"} texto="Percentual" corFundo="#DE6A33" />
            </div>
            <BotaoComponente href="/" texto="Tentar Novamente" />
        </div>
    )
}