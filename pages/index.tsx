import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import QuestionarioComponente from '../components/Questionario'
import Questao from '../model/Questao'
import styles from '../styles/Home.module.css'

const BASE_URL = 'https://quiz-game-curso.vercel.app/api'

export default function Home() {

  const router = useRouter()
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<Questao>()
  const [respostasCertas, setRespostasCertas] = useState(0)
  // const questaoRef = useRef<Questao>()


  useEffect(() => {
    carregarQuestaoIds()
  }, [])

  useEffect(() => {
    idsQuestoes.length > 0 && carregarQuestao(idsQuestoes[0])
  }, [idsQuestoes])

  // useEffect(() => {
  //   questaoRef.current = questao
  // }, [])

  async function carregarQuestaoIds() {
    const resposta = await fetch(BASE_URL + '/questionario')
    const idsQuestoes = await resposta.json()
    setIdsQuestoes(idsQuestoes)
  }

  async function carregarQuestao(id: number) {
    const resposta = await fetch(BASE_URL + '/questao/' + id)
    const json = await resposta.json()
    const novaQuestao = Questao.fromObject(json[0])
    setQuestao(novaQuestao)
  }

  function questaoRespondida(questaoRespondida: Questao) {
    setQuestao(questaoRespondida)

    if (questaoRespondida.acertou) {
      setRespostasCertas(respostasCertas + 1)
    }

    console.log(questaoRespondida)
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoId = idsQuestoes.indexOf(questao.id) + 1
      return idsQuestoes[proximoId]
    }
  }

  function irParaProximoPasso() {
    const proximoid = idProximaPergunta()
    https://quiz-game-curso.vercel.app/
    proximoid ? irParaProximaQuestao(proximoid) : finalizar()
  }

  function irParaProximaQuestao(id: number) {
    carregarQuestao(id)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsQuestoes.length,
        acertadas: respostasCertas
      }
    })
  }


  return questao ? <QuestionarioComponente questao={questao} ultima={idProximaPergunta() === undefined} questaoRespondida={questaoRespondida} irParaProximoPasso={irParaProximoPasso} /> : false
}
