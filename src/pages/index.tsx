import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | IGNews </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏🏾 &nbsp; Olá, Bem vindo </span>
          <h1>
            Novidades sobre o mundo <span>React</span>
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />{" "}
            <span>por apenas R$ 9,90/mês</span>
          </p>

          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding"></img>
      </main>
    </>
  );
}
