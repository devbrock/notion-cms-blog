import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: "center", maxWidth: "1024px" }}>
        <h2>
          Hey! I'm <em style={{ color: "yellow" }}>Brock</em> 🚀
        </h2>
        <p>
          I'm a full Stack JavaScript developer from the USA. I'm here to share
          my experiences in hopes that maybe you learn something. You can read
          more about me here, but stick around if you like JavaScript, dad
          jokes, learning new things or pictures of dogs.
        </p>
      </main>
    </div>
  );
}
