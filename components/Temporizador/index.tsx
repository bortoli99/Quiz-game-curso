import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "./styles.module.css"

interface TemporizadorProps {
    key: number
    duracao: number
    tempoEsgotado: () => void
}


export default function TemporizadorComponente(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.34],
                ]}
                key={props.key}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}