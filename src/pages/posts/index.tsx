import Head from "next/head"
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>29 de março</time> <br/>
            <strong>Obtendo o status de progresso do envio de dados com Axios</strong>
            <p>Vamos mostrar na prática como obter o progresso de cada requisição HTTP sendo feita através do método POST, do front end para o back end utilizando o Axios.</p>
          </a>
          <a>
            <time>29 de março</time>
            <strong>Obtendo o status de progresso do envio de dados com Axios</strong>
            <p>Vamos mostrar na prática como obter o progresso de cada requisição HTTP sendo feita através do método POST, do front end para o back end utilizando o Axios.</p>
          </a>
          <a>
            <time>29 de março</time>
            <strong>Obtendo o status de progresso do envio de dados com Axios</strong>
            <p>Vamos mostrar na prática como obter o progresso de cada requisição HTTP sendo feita através do método POST, do front end para o back end utilizando o Axios.</p>
          </a>
        </div>
      </main>
    </>
  )
}