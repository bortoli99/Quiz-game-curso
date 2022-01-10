import styles from "./styles.module.css"

interface EnunciadoProps {
    texto: string
}

export default function EnunciadoComponente(props: EnunciadoProps){

    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{props.texto}</span>
        </div>
    )
}